# skellyCSS

A light-weight CSS framework to quickly implement skeletons into your projects.

## Basic Usage

Skeleton content can be utilized within the Platform UI styleguide to replace placeholder text in demos. We've come up with a simple way to add skeletons content within any element or component using CSS.

### Headers

For headers, you can simply apply the `.skeleton__header` class to an empty div. The default result is a full width of parent element, gray block representing an `h1` tag:
<div class="block block-4">
  <div class="skeleton__header"></div>
</div>

```
<div class="block block-4">
  <div class="skeleton__header"></div>
</div>
```

You can specify the type of header by adding a modifier class:

| Header Type | Modifier Class | Result |
| ------------ | ------------| ------------ |
| `h1` | `.skeleton__header--h1` | `<div class="skeleton__header skeleton__header--h1"></div>` |
| `h2` | `.skeleton__header--h2` | `<div class="skeleton__header skeleton__header--h2"></div>` |
| `h3` | `.skeleton__header--h3` | `<div class="skeleton__header skeleton__header--h3"></div>` |
| `h4` | `.skeleton__header--h4` | `<div class="skeleton__header skeleton__header--h4"></div>` |
| `h5` | `.skeleton__header--h5` | `<div class="skeleton__header skeleton__header--h5"></div>` |
| `h6` | `.skeleton__header--h6` | `<div class="skeleton__header skeleton__header--h6"></div>` |

```
<div class="block">
  <div class="skeleton__header skeleton__header--h2"></div>
</div>
```

You can adjust the width of the header by applying a size modifier class:

| Width | Modifier Class | Result |
| ------------ | ------------| ------------ |
| Small, 25% | `.skeleton__header--sm` | `<div class="skeleton__header skeleton__header--sm"></div>` |
| Medium, 50% | `.skeleton__header--md` | `<div class="skeleton__header skeleton__header--md"></div>` |
| Large, 75% | `.skeleton__header--lg` | `<div class="skeleton__header skeleton__header--lg"></div>` |
| Full, 100% | `.skeleton__header--full` | `<div class="skeleton__header skeleton__header--full"></div>` |

```
<div class="block">
  <div class="skeleton__header skeleton__header--md"></div>
</div>
```

## Paragraphs

You can create skeleton paragraphs by applying the `.skeleton__paragraph` class to a `p` tag. Next, to represent multiple lines within the paragraph, include however many span tags are necessary and give them each a class of `.skeleton__paragraph-line`. This will result in multiple lines of full-width gray blocks representing a paragraph.

<div class="block block-4">
  <p class="skeleton__paragraph">
    <span class="skeleton__paragraph-line"></span>
    <span class="skeleton__paragraph-line"></span>
    <span class="skeleton__paragraph-line"></span>
    <span class="skeleton__paragraph-line"></span>
  </p>
</div>

```
<div class="block block-4">
  <p class="skeleton__paragraph">
    <span class="skeleton__paragraph-line"></span>
    <span class="skeleton__paragraph-line"></span>
    <span class="skeleton__paragraph-line"></span>
    <span class="skeleton__paragraph-line"></span>
  </p>
</div>
```

<div class="message message--info">
  <p>If there is more than one line, the last span tag will always be at 50% width.</p>
</div>


## Paragraph JavaScript Utility
We've also built in a JavaScript utility to help create paragraphs easier. Create an empty `div` and apply the `.skeleton__paragraph-container` class to it. Next add the `data-lines` attribute and set it to however many lines you'd like the paragraph to include, such as:

<div class="block block-4">
  <div class="skeleton__paragraph-container" data-lines="7"></div>
</div>

```
<div class="block block-4">
  <div class="skeleton__paragraph-container" data-lines="7">
</div>
```

<br />

## Examples
### Article
<article>
  <div class="skeleton__header skeleton__header--h1 skeleton__header--md"></div>
  <div class="skeleton__paragraph-container" data-lines="4"></div>
  <div class="skeleton__paragraph-container" data-lines="3"></div>
  <div class="skeleton__paragraph-container" data-lines="7"></div>
</article>

### Cards
<div class="block-container mb-4">
  <div class="block block-4">
    <div class="card mx-2">
      <div class="skeleton__header skeleton__header--h2 skeleton__header--md"></div>
      <div class="skeleton__paragraph-container" data-lines="3"></div>
    </div>
  </div>
    <div class="block block-4">
    <div class="card mx-2">
      <div class="skeleton__header skeleton__header--h1 skeleton__header--md"></div>
      <div class="skeleton__paragraph-container" data-lines="6"></div>
    </div>
  </div>
    <div class="block block-4">
    <div class="card mx-2">
      <div class="skeleton__header skeleton__header--h4 skeleton__header--md"></div>
      <div class="skeleton__paragraph-container" data-lines="4"></div>
    </div>
  </div>
</div>

### Modal
<div id="default-modal" class="modal modal--closed" tabindex="-1">
   <div class="modal__inner animated slideInUp faster">
     <div class="modal__header flex flex--justify-between">
       <div class="skeleton__header skeleton__header--2 skeleton__header--sm"></div>
       <button class="button modal__close" data-modal="default-modal">Close <i class="pi-times"></i></button>
     </div>
     <div class="modal__content">
       <div class="skeleton__header skeleton__header--h2 skeleton__header--md"></div>
       <div class="skeleton__paragraph-container" data-lines="7"></div>
       <div class="skeleton__paragraph-container" data-lines="3"></div>
       <div class="skeleton__paragraph-container" data-lines="5"></div>
     </div>
   </div>
 </div>
 <div class="block-container mobile-up-1 tablet-up-4 desktop-up-5 blocks px-2 mb-3">
     <div class="block">
         <button class="button button--post button--lg modal__open" data-modal="default-modal">Trigger Modal</button>
     </div>
 </div>
