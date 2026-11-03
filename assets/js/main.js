/*!
 * VuloForm website – interactions (jQuery)
 * Replaces the React/Motion behaviour of the original Next.js site.
 */
(function ($) {
  "use strict";

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $win = $(window);

  /* ---------- helpers ---------- */

  // Swap between the classes in data-on / data-off.
  function setOn($els, on) {
    $els.each(function () {
      var $el = $(this);
      $el.removeClass(on ? $el.attr("data-off") : $el.attr("data-on"));
      $el.addClass(on ? $el.attr("data-on") : $el.attr("data-off"));
    });
  }

  function clamp(v, a, b) {
    return Math.min(b, Math.max(a, v));
  }
  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  // Scroll progress of an element, like Motion's useScroll offsets.
  // mode "enter-leave": start end -> end start, "start-start": start start -> end start,
  // "sticky": start start -> end end, "enter-end": start end -> end end
  function progress(el, mode) {
    var r = el.getBoundingClientRect();
    var vh = window.innerHeight;
    var p;
    if (mode === "start-start") p = -r.top / r.height;
    else if (mode === "sticky") p = -r.top / (r.height - vh);
    else if (mode === "enter-end") p = (vh - r.top) / r.height;
    else p = (vh - r.top) / (r.height + vh);
    return clamp(p, 0, 1);
  }

  // Animate height:auto open / closed.
  function collapse($el, open) {
    $el.each(function () {
      var el = this;
      var isOpen = el.style.height === "" || el.style.height === "auto";
      if (open === isOpen) return;
      if (open) {
        el.style.height = "0px";
        el.style.opacity = "0";
        var h = el.scrollHeight;
        el.offsetHeight; // reflow
        el.style.height = h + "px";
        el.style.opacity = "1";
        $(el).one("transitionend", function () {
          if (el.style.opacity === "1") el.style.height = "";
        });
      } else {
        el.style.height = el.scrollHeight + "px";
        el.offsetHeight;
        el.style.height = "0px";
        el.style.opacity = "0";
      }
    });
  }

  /* ---------- page-load intro ---------- */
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      $("html").addClass("go");
    });
  });

  /* ---------- smooth scrolling (Lenis, like the original) ---------- */
  var lenis = null;
  if (!reduceMotion && window.Lenis) {
    lenis = new window.Lenis({ autoRaf: true, lerp: 0.1, anchors: { offset: -80 } });
  }

  /* ---------- reveal on scroll ---------- */
  if ("IntersectionObserver" in window) {
    var revealIO = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revealIO.unobserve(e.target);
          }
        });
      },
      { rootMargin: "-80px" },
    );
    $(".rv").each(function () {
      revealIO.observe(this);
    });

    var ivIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          ivIO.unobserve(e.target);
        }
      });
    });
    $(".iv").each(function () {
      ivIO.observe(this);
    });
  } else {
    $(".rv, .iv").addClass("in");
  }

  /* ---------- nav ---------- */
  var $nav = $("#site-nav");
  var $toggle = $("#menu-toggle");
  var $menu = $("#mobile-menu");
  function closeMenu() {
    $menu.attr("hidden", true);
    $toggle.attr("aria-expanded", "false");
    setOn($toggle.find("[data-on]"), false);
  }
  $toggle.on("click", function () {
    var open = $menu.is("[hidden]");
    $menu.attr("hidden", !open);
    $toggle.attr("aria-expanded", String(open));
    setOn($toggle.find("[data-on]"), open);
  });
  $menu.on("click", "a", closeMenu);

  /* ---------- hero: typing demo ---------- */
  var $email = $("#hero-email");
  $("[data-type]").each(function () {
    var $t = $(this),
      text = $t.data("type"),
      start = +$t.data("start"),
      speed = +$t.data("speed");
    var $caret = $t.next(".caret");
    var isEmail = $email.has(this).length > 0;
    setTimeout(function () {
      var i = 0;
      if (isEmail) {
        $caret.removeAttr("hidden");
      }
      var iv = setInterval(function () {
        i++;
        $t.text(text.slice(0, i));
        if (isEmail && i === 1) setOn($email, true);
        if (i >= text.length) {
          clearInterval(iv);
          $caret.attr("hidden", true);
          if (isEmail) $email.find(".pop-scale").removeAttr("hidden").addClass("anim");
        }
      }, speed);
    }, start);
  });
  setTimeout(function () {
    setOn($("#hero-topic"), true);
    collapse($("#hero-order"), true);
  }, 3700);

  /* ---------- hero: pointer tilt (spring-ish) ---------- */
  var $hero = $("[data-hero]");
  var tilt = { mx: 0, my: 0, rx: 0, ry: 0, px: 0, py: 0 };
  $hero.on("pointermove", function (e) {
    var r = this.getBoundingClientRect();
    tilt.mx = (e.clientX - r.left) / r.width - 0.5;
    tilt.my = (e.clientY - r.top) / r.height - 0.5;
  });

  /* ---------- builder: scroll-driven steps ---------- */
  var $builder = $("[data-builder]");
  var builderStep = -1;
  function setBuilderStep(step) {
    if (step === builderStep) return;
    builderStep = step;
    $builder.find("[data-steps]").each(function () {
      var list = String($(this).attr("data-steps")).split(",");
      setOn($(this), list.indexOf(String(step)) !== -1);
    });
    $builder.find("[data-steps-alt]").each(function () {
      var on = String($(this).attr("data-steps-alt")).split(",").indexOf(String(step)) !== -1;
      $(this).toggleClass($(this).attr("data-on-alt"), on);
    });
    $builder.find("[data-show]").each(function () {
      var $el = $(this);
      var show = String($el.attr("data-show")).split(",").indexOf(String(step)) !== -1;
      var wasHidden = $el.is("[hidden]");
      $el.attr("hidden", !show);
      if (show && wasHidden && $el.hasClass("pop-scale")) {
        $el.removeClass("anim");
        this.offsetWidth;
        $el.addClass("anim");
      }
    });
    $builder.find("[data-collapse-steps]").each(function () {
      collapse($(this), String(step) === String($(this).attr("data-collapse-steps")));
    });
  }

  /* ---------- scroll + animation loop ---------- */
  var $heroLayers = {};
  $("[data-hero-layer]").each(function () {
    $heroLayers[$(this).data("hero-layer")] = $(this);
  });
  var $tiltCard = $("[data-hero-tilt]");
  var $bar = $("[data-builder-bar]");
  var $parSections = $("[data-par-section]");
  var $cta = $("[data-cta]");
  var lastScrolled = null;

  function frame() {
    var y = window.scrollY || window.pageYOffset;

    // nav pill
    var scrolled = y > 24;
    if (scrolled !== lastScrolled) {
      setOn($nav, scrolled);
      lastScrolled = scrolled;
    }

    // hero parallax + tilt
    if ($hero.length) {
      var p = progress($hero[0], "start-start");
      tilt.rx = lerp(tilt.rx, tilt.my * -12, 0.12);
      tilt.ry = lerp(tilt.ry, tilt.mx * 16, 0.12);
      tilt.px = lerp(tilt.px, tilt.mx * 36, 0.08);
      tilt.py = lerp(tilt.py, tilt.my * 28, 0.08);
      if (!reduceMotion) {
        $heroLayers.back && $heroLayers.back.css("transform", "translateY(" + 120 * p + "px)");
        $heroLayers.text &&
          $heroLayers.text.css({ transform: "translateY(" + 140 * p + "px)", opacity: clamp(1 - p / 0.7, 0, 1) });
        $heroLayers.card && $heroLayers.card.css("transform", "translateY(" + -60 * p + "px)");
        $heroLayers.chip1 && $heroLayers.chip1.css("transform", "translate(" + tilt.px + "px," + -240 * p + "px)");
        $heroLayers.chip2 && $heroLayers.chip2.css("transform", "translate(" + tilt.py + "px," + -150 * p + "px)");
        $heroLayers.chip3 && $heroLayers.chip3.css("transform", "translateY(" + -240 * p + "px)");
        $tiltCard.css("transform", "rotateX(" + tilt.rx + "deg) rotateY(" + tilt.ry + "deg)");
      }
    }

    // builder
    if ($builder.length) {
      var bp = progress($builder[0], "sticky");
      $bar.css("width", bp * 100 + "%");
      setBuilderStep(Math.min(3, Math.floor(bp * 4.2)));
    }

    // generic parallax (features blobs, privacy word bands)
    if (!reduceMotion) {
      $parSections.each(function () {
        var sp = progress(this, "enter-leave");
        $(this)
          .find("[data-par-y]")
          .each(function () {
            var r = $(this).attr("data-par-y").split(",");
            this.style.transform = "translateY(" + lerp(+r[0], +r[1], sp) + "px)";
          });
        $(this)
          .find("[data-par-x]")
          .each(function () {
            var r = $(this).attr("data-par-x").split(",");
            this.style.transform = "translateX(" + lerp(+r[0], +r[1], sp) + "%)";
          });
      });

      // CTA zoom
      if ($cta.length) {
        var cp = progress($cta[0], "enter-end");
        $cta
          .find("[data-cta-box]")
          .css({ transform: "scale(" + lerp(0.88, 1, cp) + ")", borderRadius: lerp(80, 36, cp) + "px" });
        $cta.find("[data-cta-y]").each(function (i) {
          var r = $(this).attr("data-cta-y").split(",");
          this.style.transform = "translateY(" + lerp(+r[0], +r[1], cp) + "px) rotate(" + (i === 0 ? -8 : 6) + "deg)";
        });
      }
    }

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  /* ---------- logic: conditional demo ---------- */
  $("[data-cond-demo]").each(function () {
    var $demo = $(this);
    $demo.on("click", "[data-topic]", function () {
      var t = $(this).data("topic");
      $demo.find("[data-topic]").each(function () {
        var on = $(this).data("topic") === t;
        $(this).attr("aria-checked", on);
        setOn($(this), on);
      });
      collapse($demo.find("[data-cond-order]"), t === "Problem with an order");
    });
  });

  /* ---------- logic: multi-step + calculation demo ---------- */
  $("[data-calc-demo]").each(function () {
    var $d = $(this),
      qty = 3,
      plan = 24,
      step = 0,
      shown = 72;
    var $total = $d.find("[data-calc-total]");

    function animateTotal() {
      var target = qty * plan,
        from = shown;
      $({ v: from })
        .stop(true)
        .animate(
          { v: target },
          {
            duration: 450,
            easing: "swing",
            step: function (v) {
              shown = v;
              $total.text("$" + v.toFixed(2));
            },
            complete: function () {
              shown = target;
              $total.text("$" + target.toFixed(2));
            },
          },
        );
    }
    function render() {
      $d.find("[data-calc-qty]").text(qty);
      $d.find("[data-plan]").each(function () {
        setOn($(this), +$(this).data("plan") === plan);
      });
      $d.find("[data-calc-pane]").each(function () {
        $(this).attr("hidden", +$(this).data("calc-pane") !== step);
      });
      $d.find("[data-calc-stepnum]").text(step + 1);
      $d.find("[data-calc-dot]").each(function () {
        var i = +$(this).data("calc-dot");
        $(this).css({ width: i === step ? 40 : 16, backgroundColor: i <= step ? "#004bf2" : "#e7e3d8" });
      });
      $d.find("[data-calc-back]").attr("hidden", step !== 1);
      $d.find("[data-calc-next]").text(step === 0 ? "Next →" : "Start over");
    }
    $d.on("click", "[data-plan]", function () {
      plan = +$(this).data("plan");
      render();
      animateTotal();
    });
    $d.on("click", "[data-qty]", function () {
      qty = clamp(qty + +$(this).data("qty"), 1, 20);
      render();
      animateTotal();
    });
    $d.on("click", "[data-calc-back]", function () {
      step = 0;
      render();
    });
    $d.on("click", "[data-calc-next]", function () {
      step = step === 0 ? 1 : 0;
      render();
    });
  });

  /* ---------- tabs (compare + embed) ---------- */
  $("[data-tabs]").each(function () {
    var $s = $(this);
    $s.on("click", "[data-tab]", function () {
      var id = $(this).data("tab");
      $s.find("[data-tab]").each(function () {
        var on = $(this).data("tab") === id;
        setOn($(this), on);
        $(this).attr("aria-pressed", on);
        $(this).find("[data-pill]").attr("hidden", !on);
      });
      $s.find("[data-panel]").each(function () {
        var show = $(this).data("panel") === id;
        $(this).attr("hidden", !show);
        if (show)
          $(this)
            .find(".iv")
            .removeClass("in")
            .each(function () {
              var el = this;
              el.offsetWidth;
              el.classList.add("in");
            });
      });
      $s.find("[data-copy]").text("Copy");
    });
  });

  /* ---------- copy code (embed) ---------- */
  $("[data-copy]").on("click", function () {
    var $btn = $(this);
    var code = $btn.closest("[data-embed]").find("[data-panel]:not([hidden]) pre").text();
    if (navigator.clipboard) navigator.clipboard.writeText(code).catch(function () {});
    $btn.text("Copied ✓");
    clearTimeout($btn.data("t"));
    $btn.data(
      "t",
      setTimeout(function () {
        $btn.text("Copy");
      }, 1600),
    );
  });

  /* ---------- FAQ accordion ---------- */
  $("[data-faq]").on("click", "[data-faq-q]", function () {
    var $item = $(this).parent();
    var willOpen = $(this).attr("aria-expanded") !== "true";
    $item.siblings().each(function () {
      var $q = $(this).find("[data-faq-q]");
      if ($q.attr("aria-expanded") === "true") toggleFaq($(this), false);
    });
    toggleFaq($item, willOpen);
  });
  function toggleFaq($item, open) {
    $item.find("[data-faq-q]").attr("aria-expanded", open);
    var $icon = $item.find("[data-faq-icon]");
    $icon.css({ transform: "rotate(" + (open ? 45 : 0) + "deg)", backgroundColor: open ? "#19b37b" : "#e9eeff" });
    setOn($icon, open);
    collapse($item.find("[data-faq-a]"), open);
  }

  /* ---------- blog table of contents ---------- */
  var $tocLinks = $("[data-toc] a");
  if ($tocLinks.length && "IntersectionObserver" in window) {
    var ids = [];
    $tocLinks.each(function () {
      var id = this.getAttribute("href").slice(1);
      if (ids.indexOf(id) === -1) ids.push(id);
    });
    var tocIO = new IntersectionObserver(
      function (entries) {
        var hit = entries
          .filter(function (e) {
            return e.isIntersecting;
          })
          .sort(function (a, b) {
            return a.boundingClientRect.top - b.boundingClientRect.top;
          })[0];
        if (!hit) return;
        $tocLinks.each(function () {
          var on = this.getAttribute("href") === "#" + hit.target.id;
          setOn($(this), on);
          if (on) this.setAttribute("aria-current", "location");
          else this.removeAttribute("aria-current");
        });
      },
      { rootMargin: "-100px 0px -65% 0px" },
    );
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) tocIO.observe(el);
    });
  }
})(jQuery);
