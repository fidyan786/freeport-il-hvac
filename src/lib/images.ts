/**
 * Layout-accurate next/image `sizes` for the max-w-6xl (1152px) shell.
 * 50vw / 100vw / 33vw on this layout tells the browser to pick 1920–3840px
 * candidates for columns that actually render around 360–576px.
 */
export const IMAGE_SIZES = {
  /** Two-column split inside max-w-6xl (measured ~536px on desktop). */
  split: "(max-width: 1023px) calc(100vw - 2rem), 536px",
  /** Hero / about band: one column of the same 2-col grid, edge-to-edge on small screens. */
  hero: "(max-width: 1023px) 100vw, 576px",
  /** 2–3 column cards. */
  card: "(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2.5rem), 360px",
  /** Service-page sticky aside. */
  aside: "(max-width: 1023px) calc(100vw - 2rem), 420px",
  /** ~14rem homepage thumbs. */
  thumb: "(max-width: 639px) calc(100vw - 2rem), 224px",
} as const;
