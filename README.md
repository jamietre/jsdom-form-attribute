## JSDOM submit bug using `form` attribute on `button`

When a `button` element contains a `form` attribute with the ID of a `form` element on the same page, it becomes **associated** with that form. It's behvior should mimic the behavior of a button that is a child of same form element; the form becomes the "form owner" of the button.

https://html.spec.whatwg.org/#attr-fae-form

With JSDOM, triggering a `click` event on a button that is associated with a form using the `form` attribute as described in the spec does not cause a `submit` event to fire on the form. When the button is associated with a form by nature of being a child element, a submit event is correctly fired on the form.

Possibly related:

https://github.com/jsdom/jsdom/issues/765

Example of expected behavior:

https://codepen.io/jamietre/pen/BOggdj
