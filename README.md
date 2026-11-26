# nsm-os-icons

Nineteen hand-drawn icons for a navigation sidebar. They share one style: a 24 grid, one stroke weight, one moss part each and one small hover motion each. They are plain SVG with CSS. React is optional.

Live preview: open `index.html` (also on GitHub Pages). Hover or tab to any icon to see its motion.

## What is in this repo

| Path | What it is |
| --- | --- |
| `svg/nsm-<name>.svg` | One static icon per file. Rest state. No motion. |
| `icons.css` | All the motion for the plain HTML use. |
| `snippets/nsm-<name>.html` | Inline SVG with the host wrapper, ready to paste. |
| `react/NsmIcon.tsx` | One React component for all icons. No dependency except React. |
| `react/nsm-icons.css` | The same CSS as `icons.css`, for the React import. |
| `icons.json` | Manifest for agents: name, label, meaning, files, animated parts, motion, duration. |
| `index.html` | The preview page. Day and Night. No external requests. |

## Design rules

Follow these rules for every icon, old or new.

- Grid: `viewBox="0 0 24 24"`. Keep all drawing inside 2 to 22. A small part may reach the edge.
- Stroke: 1.75 units on every icon. Use `stroke-linecap="round"` and `stroke-linejoin="round"`. Set `fill="none"` on the root.
- Colour: draw with `currentColor`. The icon takes the text colour of its parent.
- Accent: each icon has at most one moss part. It reads the CSS variable `--nsm-accent` and falls back to `#6d8c40`. In a dark theme set `--nsm-accent: #79994d`.
- Corners: bodies use a radius of 2 to 2.5. Small parts use 1.25 to 1.75.
- Fills: only the accent and small dots are filled. All other parts are outlines.
- Size: design for 16 px first. At 16 px one unit is 0.67 px. Do not put detail smaller than 1.5 units apart. Check the icon at 16 px next to the other icons. No two silhouettes may match.
- One idea: each icon has one small detail that makes it ours (an open door, a smile, a keystone). Do not add a second.
- Motion: one move, 480 to 700 ms, eased. It plays on hover or keyboard focus and returns to the rest state.

## Use in plain HTML

1. Add `icons.css` to the page.
2. Paste an inline SVG from `snippets/`. It is wrapped in a `span` with class `nsm-icon-host`.
3. Put the icon in a button, link or row. Give that parent the class `nsm-icon-host` so the whole row triggers the motion.

```html
<link rel="stylesheet" href="icons.css">
<a class="nsm-icon-host" href="/home">
  <!-- paste the svg from snippets/nsm-home.html -->
  Home
</a>
```

The icon also plays when you hover the icon itself. Add the class `is-playing` to a host to run the motion from script. Remove it after about 1.5 s.

To use a static file, load `svg/nsm-home.svg` in an `img` tag. An `img` cannot take `currentColor` from the page and does not animate. Inline the SVG when you need colour or motion.

## Use in React

```tsx
import "./react/nsm-icons.css";
import { NsmIcon } from "./react/NsmIcon";

<button className="nsm-icon-host">
  <NsmIcon name="home" size={16} />
  Home
</button>
```

- `name` is the icon name without the `nsm-` prefix.
- `size` defaults to 16.
- `flip` mirrors the icon. Use it for `collapse` when the sidebar is collapsed.

## How the hover trigger works

- The motion rules start with a trigger selector. The trigger is a parent with class `nsm-icon-host` that is hovered, focused (`:focus-visible` or `:focus-within`) or has class `is-playing`. The icon itself hovered also counts.
- Parts of an icon have classes named `nsm-<icon>-<part>`, for example `nsm-home-door`. The CSS animates those classes only.
- All motion sits inside `@media (prefers-reduced-motion: no-preference)`. A user who asks for reduced motion sees the rest state and no change on hover. Keep this rule.
- Some icons keep their end state while the pointer stays on the host and return when it leaves (Home, Packaging, Improvements, Macro). The others play once.

## Add a new icon in the same style

1. Pick one meaning and one small idea. Write the motion in one sentence.
2. Draw it on the 24 grid with the rules above. Draw the static version first and check it at 16 px.
3. Give each animated part a class `nsm-<icon>-<part>`. Give the accent part `nsm-acc` (filled and stroked) or `nsm-acc-s` (stroke only). Give small filled dots `nsm-dot`. Give a part that is hidden at rest the class `nsm-hide-rest` and set its rest style in CSS.
4. Add the rules to `icons.css`. Write each trigger rule as `<trigger> .nsm-<icon>-<part> { ... }`. Copy the trigger from an existing rule. Put the rules inside the reduced-motion media block.
5. Name the keyframes `nsm-<icon>-<move>`.
6. When a part scales on one axis, add `vector-effect: non-scaling-stroke` and set its stroke width from `--nsm-sw` (see `nsm-home-door`). Otherwise the line weight changes during the squash.
7. A `g` element with a `transform` attribute is handled by a rule that sets `transform-box: view-box`. Keep that rule.
8. Add the icon to `svg/`, `snippets/`, `react/NsmIcon.tsx`, `icons.json` and `index.html`.
9. Open `index.html`. Check hover, keyboard focus, Day, Night and the 16 px row.

## Icons

| Name | Label | Idea | Motion | Duration |
| --- | --- | --- | --- | --- |
| `nsm-home` | Home | A little house. The door opens and a moss light turns on inside. | The door swings open on hover and closes when the hover ends. | 480 ms |
| `nsm-dashboard` | Dashboard | Three round bars and a moss dot on the tallest. | The bars drop and regrow one after another. The dot pops last. | 700 ms |
| `nsm-packaging` | Packaging | A friendly box. The lid lifts and a moss spark rises out. | The lid lifts and the spark rises on hover. Both settle back when the hover ends. | 520 ms |
| `nsm-production` | Production | A clapperboard with a moss play mark. | The clapper claps twice. The play mark ticks on the second clap. | 640 ms |
| `nsm-keystone` | Keystone | A stone arch. The top stone is moss, the keystone that holds the arch. | The keystone lifts, drops with a small thud and settles. | 600 ms |
| `nsm-inspiration` | Inspiration | A round-cornered star with a moss spark beside it. | The star turns one point and swells. The spark twinkles. | 640 ms |
| `nsm-network` | Network | A moss hub with three linked account nodes. | The nodes pulse one after another and the hub swells. | 660 ms |
| `nsm-improvements` | Improvements | Three sliders. One knob is moss. | The knobs slide to new places on hover and slide back when the hover ends. | 560 ms |
| `nsm-tracking` | Tracking | Two linked chain rings. One ring is moss. | The rings pull apart and snap back together. | 560 ms |
| `nsm-requests` | Requests | A speech bubble with a moss plus. | The plus turns a quarter and swells. | 600 ms |
| `nsm-prints` | Prints | A small cube, the thing being printed. The inner edges are moss. | The inner edges draw in again, like a part being built. | 640 ms |
| `nsm-updates` | Updates | A bell with a moss clapper. | The bell rings and the swing dies down. | 700 ms |
| `nsm-settings` | Settings | A gear with a moss hub ring. | The gear turns one tooth. It looks the same at the end. | 600 ms |
| `nsm-collapse` | Collapse sidebar | A panel edge with an arrow. The edge is moss. | The arrow nudges toward the edge and settles. | 520 ms |
| `nsm-sun` | Light theme | A sun with eight rays and a moss core. | The rays turn one step and the core swells. | 640 ms |
| `nsm-moon` | Dark theme | A crescent moon with two moss stars. | The moon tips back and returns. The stars twinkle. | 640 ms |
| `nsm-stages` | Stages | A board with three columns. A small moss card sits in the first. | The card hops into the second column and hops back. | 700 ms |
| `nsm-more` | More | Three dots. The middle one is moss. | The dots hop in a wave. | 700 ms |
| `nsm-macro` | Macro | Four cells. The top-right cell is moss. | The moss cell and the cell below it swap places on hover and swap back when the hover ends. | 560 ms |

## Notes

- Sizes in the app are 16 px in the sidebar, 15 px in the phone tab bar and 14 px on the small edge handle.
- The accent part is the only colour. Do not add a second colour.
- No licence is set. Ask the owner before you reuse the icons outside the NSM project.
