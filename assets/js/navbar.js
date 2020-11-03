document.addEventListener(&#39; DOMContentLoaded &#39;, () =& gt; {

    // Get all &quot;navbar-burger&quot; elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(&#39;.navbar - burger &#39;), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length & gt; 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(el =& gt; {
        el.addEventListener(&#39; click &#39;, () =& gt; {

          // Get the target from the &quot;data-target&quot; attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the &quot;is-active&quot; class on both the &quot;navbar-burger&quot; and the &quot;navbar-menu&quot;
          el.classList.toggle(&#39; is - active &#39;);
          $target.classList.toggle(&#39; is - active &#39;);

        });
      });
    }

  });