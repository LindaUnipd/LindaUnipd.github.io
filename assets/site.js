/* Search and filter for the Publications and Talks pages.
   Everything is readable without JavaScript; this only adds the filter bar. */
(function () {
  var norm = function (s) {
    return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\u2018\u2019]/g, "'").toLowerCase();
  };

  document.querySelectorAll("[data-filter]").forEach(function (root) {
    var bar = root.querySelector(".filters");
    if (!bar) return;
    bar.hidden = false;

    var input = bar.querySelector("input");
    var chips = Array.prototype.slice.call(bar.querySelectorAll(".chip"));
    var out = bar.querySelector(".filter-count");
    var empty = root.querySelector(".filter-empty");
    var items = Array.prototype.slice.call(root.querySelectorAll(".entry"));
    var groups = Array.prototype.slice.call(root.querySelectorAll("[data-group]"));
    var type = "all";

    items.forEach(function (li) { li._text = norm(li.textContent); });

    function apply() {
      var terms = norm(input.value.trim()).split(/\s+/).filter(Boolean);
      var shown = 0;
      items.forEach(function (li) {
        var ok = (type === "all" || li.dataset.type === type) &&
          terms.every(function (t) { return li._text.indexOf(t) !== -1; });
        li.hidden = !ok;
        if (ok) shown++;
      });
      groups.forEach(function (g) {
        g.hidden = !g.querySelector(".entry:not([hidden])");
      });
      out.textContent = shown === items.length ? items.length + " items" : shown + " of " + items.length;
      if (empty) empty.hidden = shown !== 0;
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        type = chip.dataset.type;
        chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
        apply();
      });
    });
    input.addEventListener("input", apply);
    apply();
  });

  /* Hide the portrait image if assets/photo.jpg has not been added yet */
  document.querySelectorAll("img[data-optional]").forEach(function (img) {
    var drop = function () { img.remove(); };
    if (img.complete && img.naturalWidth === 0) drop();
    else img.addEventListener("error", drop);
  });
})();
