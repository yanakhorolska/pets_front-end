export const theme = {
  color: {
    black: '#000',
    white: '#fff',
    background: '#FDF7F2',
    accent: '#F59256',

    logo: '#111111',

    text: '#111111',
    primaryText: '#111111',
    navBarText: '#181C27',
    searchText: '#535353',
    textRegister: '#3091EB',
    primaryBtnText: '#111111',
    secondatyBtnText: '#FFFFFF',

    hoverBtn: '#FF6101',

    shadowCard: 'rgba(49, 21, 4, 0.07)',

    greyTransp: 'rgba(17, 17, 17, 0.6)',
    inputModal: 'rgba(245, 146, 86, 0.5)',
  },
  opacity: {
    one: '1',
  },
  transition: {
    backdrop: 'opacity 250ms cubic - bezier(0.4, 0, 0.2, 1)',
    modal: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  transform: {
    modal: 'translate(-50%, -50%) scale(1)',
  },
  backdropFilter: {
    blur: 'blur(10px)',
  },
  space: {
    p: {
      xxs: '16px',
      xs: '20px',
      s: '32px',
      m: '40px',
      l: '60px',
      xl: '80px',
    },
    m: {
      auto: '0 auto',
    },
  },

  fonts: {
    body: "Manrope', sans-serif",
    logo: "Poppins', sans-serif",
  },

  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '68px',
  },

  fontWeights: {
    default: 400,
    heading: 500,
    bold: 700,
  },

  lineHeights: {
    s: 1.36,
    m: 1.47,
  },

  borders: {
    none: 'none',
    normal: '1px solid',
    inputModal: '2px solid',
  },
  radii: {
    borderRadius: {
      none: '0',
      btn: '40px',
      inputModal: '20px',
      round: '50%',
    },
  },
  sizes: {
    width: {
      max: '100%',
      auto: 'auto',
      modalS: '280px',
      modalM: '608px',
      modalM2: '704px',
      mediaS: '320px',
      mediaM: '768px',
      mediaL: '1280px',
    },
    height: {
      max: '100%',
      auto: 'auto',
    },
    top: {
      zero: '0',
      half: '50%',
    },
    left: {
      zero: '0',
      half: '50%',
    },
  },

  media: {
    mobileMax: '(max-width: 319px)',
    mobileMin: '(min-width: 320px)',
    tablet: '(max-width: 1279px) and (min-width: 768px)',
    tabletDesktop: '(min-width: 768px)',
    desktop: '(min-width: 1280px)',
  },

  display: {
    flex: 'flex',
    box: 'box',
  },

  textAlign: {
    center: 'center',
  },

  position: {
    a: 'absolute',
    r: 'relative',
    f: 'fixed',
  },
  flexDirection: {
    col: 'column',
  },
};
