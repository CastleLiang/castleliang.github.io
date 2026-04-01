---
---
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var rootEl = document.getElementById("talks-activity-gallery-root");
    if (!rootEl || !window.React || !window.ReactDOM) {
      return;
    }

    var React = window.React;
    var ReactDOM = window.ReactDOM;
    var h = React.createElement;

    var activityGroups = [
      {
        id: "aaai-2026-fm4ts",
        tag: "AAAI 2026",
        title: "Foundation Models for Time Series Analysis",
        date: "January 2026, Singapore",
        description: "Tutorial on foundation models for time series analysis, with a focus on modern architectures, evaluation, and emerging real-world data science applications.",
        images: ["{{ '/assets/img/gallery/aaai26_fm4ts.jpg' | relative_url }}"]
      },
      {
        id: "kdd-2025-fm4st",
        tag: "KDD 2025",
        title: "Foundation Models for Spatio-Temporal Data Science",
        date: "August 2025, Toronto",
        description: "A tutorial and survey session covering the evolving landscape of spatio-temporal foundation models and their scientific and industrial use cases.",
        images: ["{{ '/assets/img/gallery/kdd25_fm4st.jpg' | relative_url }}"]
      },
      {
        id: "kdd-2025-urbcomp",
        tag: "UrbComp @ KDD 2025",
        title: "Urban Computing Community Activity",
        date: "August 2025, Toronto",
        description: "Workshop organizing and community-building activity around urban computing, city intelligence, and data-driven societal applications.",
        images: ["{{ '/assets/img/gallery/kdd25_urbcomp.jpg' | relative_url }}"]
      },
      {
        id: "www-2025-webst",
        tag: "WWW 2025",
        title: "Spatio-Temporal Data Mining from the Web",
        date: "May 2025, Sydney",
        description: "An academic activity focused on web-centric spatio-temporal intelligence, mining methodologies, and interdisciplinary data-driven applications.",
        images: ["{{ '/assets/img/gallery/www25_webst.jpg' | relative_url }}"]
      },
      {
        id: "kdd-2024-fm4ts",
        tag: "KDD 2024",
        title: "Foundation Models for Time Series Analysis",
        date: "August 2024, Barcelona",
        description: "Tutorial presentation on the foundations, opportunities, and open research directions of time series foundation models in modern AI systems.",
        images: ["{{ '/assets/img/gallery/kdd24_fm4ts.jpg' | relative_url }}"]
      },
      {
        id: "kdd-2024-urbcomp",
        tag: "UrbComp @ KDD 2024",
        title: "Urban Computing Workshop Activity",
        date: "August 2024, Barcelona",
        description: "Workshop activity showcasing research exchange on urban analytics, spatio-temporal learning, and AI for city-scale systems.",
        images: ["{{ '/assets/img/gallery/kdd24_urbcomp.jpg' | relative_url }}"]
      }
    ];

    var slides = activityGroups.reduce(function (acc, activity, activityIndex) {
      return acc.concat(
        activity.images.map(function (src, imageIndex) {
          return {
            key: activity.id + "-" + imageIndex,
            src: src,
            activityIndex: activityIndex,
            imageIndex: imageIndex
          };
        })
      );
    }, []);

    function GalleryArrow(props) {
      var direction = props.direction;
      var iconClass = direction === "left" ? "fas fa-chevron-left" : "fas fa-chevron-right";
      var edgeClass = direction === "left" ? "left-3" : "right-3";

      return h(
        "button",
        {
          type: "button",
          onClick: props.onClick,
          className:
            "absolute " +
            edgeClass +
            " top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-slate-900/55 text-white shadow-lg shadow-slate-900/20 backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-slate-900/70 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2",
          "aria-label": props.label
        },
        h("i", { className: iconClass + " text-sm" })
      );
    }

    function ActivityGallery() {
      var _React$useState = React.useState(0),
        currentSlideIndex = _React$useState[0],
        setCurrentSlideIndex = _React$useState[1];

      var currentSlide = slides[currentSlideIndex];
      var currentActivity = activityGroups[currentSlide.activityIndex];

      function goToSlide(index) {
        setCurrentSlideIndex((index + slides.length) % slides.length);
      }

      return h(
        "section",
        {
          className:
            "not-prose overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_20px_60px_-40px_rgba(15,23,42,0.45)]"
        },
        h(
          "div",
          {
            className:
              "border-b border-slate-200/80 bg-[linear-gradient(135deg,rgba(15,23,42,0.03),rgba(41,75,146,0.08),rgba(255,255,255,0.88))] px-5 py-4 sm:px-7 sm:py-5"
          },
          h(
            "div",
            { className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" },
            h(
              "div",
              null,
              h(
                "div",
                { className: "mb-2 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-800" },
                "Academic Activity Gallery"
              ),
              h(
                "h3",
                { className: "m-0 text-2xl font-semibold tracking-tight text-slate-900 sm:text-[1.9rem]" },
                "Selected Tutorials and Organizing Moments"
              ),
              h(
                "p",
                { className: "mt-2 max-w-3xl text-sm leading-6 text-slate-600 sm:text-[0.96rem]" },
                "A compact visual overview of recent academic activities, with event context and tutorial highlights aligned to the current image."
              )
            ),
            h(
              "div",
              { className: "grid w-full max-w-xs grid-cols-2 gap-3 self-start sm:self-auto" },
              h(
                "div",
                { className: "rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-center shadow-sm backdrop-blur" },
                h("div", { className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500" }, "Activities"),
                h("div", { className: "mt-1 text-xl font-semibold text-slate-900" }, String(activityGroups.length))
              ),
              h(
                "div",
                { className: "rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-center shadow-sm backdrop-blur" },
                h("div", { className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500" }, "Current"),
                h("div", { className: "mt-1 text-sm font-semibold text-slate-900" }, currentActivity.tag)
              )
            )
          )
        ),
        h(
          "div",
          { className: "grid gap-6 px-5 py-5 sm:px-7 sm:py-7 lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,0.9fr)] lg:items-start" },
          h(
            "div",
            { className: "space-y-4" },
            h(
              "div",
              { className: "relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.55)]" },
              h("div", { className: "aspect-video bg-slate-200" }, h("img", {
                src: currentSlide.src,
                alt: currentActivity.title + " photo " + String(currentSlide.imageIndex + 1),
                className: "h-full w-full object-cover transition-all duration-300"
              })),
              h(GalleryArrow, { direction: "left", onClick: function () { goToSlide(currentSlideIndex - 1); }, label: "Previous activity photo" }),
              h(GalleryArrow, { direction: "right", onClick: function () { goToSlide(currentSlideIndex + 1); }, label: "Next activity photo" }),
              h(
                "div",
                { className: "absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm backdrop-blur" },
                currentActivity.tag
              ),
              h(
                "div",
                { className: "absolute bottom-4 right-4 rounded-full bg-slate-950/60 px-3 py-1 text-xs font-medium text-white shadow-sm backdrop-blur" },
                String(currentSlideIndex + 1) + " / " + String(slides.length)
              )
            ),
            h(
              "div",
              { className: "grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6" },
              slides.map(function (slide, slideIndex) {
                var activity = activityGroups[slide.activityIndex];
                var isActive = slideIndex === currentSlideIndex;
                return h(
                  "button",
                  {
                    key: slide.key,
                    type: "button",
                    onClick: function () {
                      goToSlide(slideIndex);
                    },
                    className:
                      "group overflow-hidden rounded-2xl border bg-white text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2 " +
                      (isActive
                        ? "border-indigo-300 shadow-[0_10px_26px_-16px_rgba(41,75,146,0.7)] ring-1 ring-indigo-100"
                        : "border-slate-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_10px_24px_-18px_rgba(15,23,42,0.5)]")
                  },
                  h("div", { className: "aspect-[4/3] overflow-hidden bg-slate-100" }, h("img", {
                    src: slide.src,
                    alt: activity.title + " thumbnail",
                    className:
                      "h-full w-full object-cover transition-transform duration-300 " +
                      (isActive ? "scale-[1.03]" : "group-hover:scale-[1.03]")
                  })),
                  h(
                    "div",
                    { className: "border-t border-slate-100 px-3 py-2" },
                    h("div", { className: "truncate text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500" }, activity.tag),
                    h("div", { className: "mt-1 line-clamp-2 text-sm font-medium leading-5 text-slate-800" }, activity.title)
                  )
                );
              })
            )
          ),
          h(
            "aside",
            { className: "rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,rgba(248,250,252,0.92),rgba(255,255,255,1))] p-5 shadow-[0_16px_40px_-34px_rgba(15,23,42,0.45)]" },
            h("div", { className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500" }, "Activity Basics"),
            h("h4", { className: "mt-3 text-xl font-semibold leading-8 tracking-tight text-slate-900" }, currentActivity.title),
            h(
              "div",
              { className: "mt-3 flex flex-wrap gap-2" },
              h("span", { className: "inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-800" }, currentActivity.tag),
              h("span", { className: "inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600" }, currentActivity.date)
            ),
            h("p", { className: "mt-4 text-sm leading-7 text-slate-600" }, currentActivity.description),
            h(
              "div",
              { className: "mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1" },
              h(
                "div",
                { className: "rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm" },
                h("div", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500" }, "Display"),
                h("div", { className: "mt-1 text-sm font-medium text-slate-800" }, "Responsive hero gallery")
              ),
              h(
                "div",
                { className: "rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm" },
                h("div", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500" }, "Navigation"),
                h("div", { className: "mt-1 text-sm font-medium text-slate-800" }, "Arrow controls and thumbnails")
              ),
              h(
                "div",
                { className: "rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm" },
                h("div", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500" }, "Collection"),
                h("div", { className: "mt-1 text-sm font-medium text-slate-800" }, String(currentActivity.images.length) + " image" + (currentActivity.images.length > 1 ? "s" : ""))
              )
            )
          )
        )
      );
    }

    ReactDOM.createRoot(rootEl).render(h(ActivityGallery));
  });
})();
