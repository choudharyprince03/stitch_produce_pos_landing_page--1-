/**
 * MEDIA SLOTS — drop your real images here.
 *
 * 1. Put the file in  /public/images/slots/  (e.g. public/images/slots/hero-pos.png)
 * 2. Set the path below, e.g.  heroHardware: "/images/slots/hero-pos.png"
 *
 * Anything left as `null` keeps its built-in stand-in (a live HTML screen
 * or the current placeholder photo), so the page never shows an empty box.
 *
 * Sizes that work best:
 *  - heroHardware:   transparent PNG/WebP of the full POS setup, ~1600x1200
 *  - screens.*:      POS screen captures, 16:10, min 1600px wide
 *  - hardware.*:     4:3 photos, min 1200px wide
 */
export const MEDIA = {
  /** Hero: the whole POS (terminal, scale, printer). Replaces the live demo screen frame. */
  heroHardware: null as string | null,

  /** Real POS screen captures. Each replaces the built-in live screen in the "three screens" section. */
  screens: {
    checkout: null as string | null,
    invoice: null as string | null,
    backoffice: null as string | null,
  },

  /** Free hardware kit + optional add-ons. Stand-in photos are used until you set these. */
  hardware: {
    scale: null as string | null,
    printer: null as string | null,
    drawer: null as string | null,
    customerDisplay: null as string | null,
    handheld: null as string | null,
    shelfTags: null as string | null,
  },

  /** Full-bleed photo of a real store lane, shown behind the closing call to action. */
  storeLane: null as string | null,
};

/** Current stand-in photographs. Replace via MEDIA above. */
export const STAND_IN = {
  scale: "/images/bioptic_scale.jpg",
  printer: "/images/pinpad_printer.jpg",
  drawer: "/images/hardware_suite.jpg",
  customerDisplay: "/images/pos_terminal_hero.jpg",
  handheld: "/images/handheld_scanner.jpg",
  shelfTags: "/images/electronic_shelf_labels.jpg",
  storeLane: "/images/produce_ambient.jpg",
};
