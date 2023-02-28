export const getMode = mode => {
  const theme = {
    color: {
      mode,
      ...(mode === 'dark'
        ? {
            black: '#000',

            white: '#fff',
            cards: '#212F3C',
            background: '#212F3C',
            accent: '#F59256',
            logo: '#111111',
            text: '#fff',
            buttonOW: '#F59256',
            textLight: '#111321',
            primaryText: '#111111',
            newsText: '#fff',
            newsDate: 'rgba(245, 245, 245, 0.6)',
            navBarText: '#181C27',
            searchText: '#535353',
            textRegister: '#3091EB',
            primaryBtnText: '#111111',
            secondatyBtnText: '#FFFFFF',
            hoverBtn: '#FF6101',
            shadowCard: 'rgba(49, 21, 4, 0.07)',
            greyTransp: '#fff',
            inputModal: '#FDF7F2',
            none: 'none',
          }
        : {
            black: '#000',
            white: '#fff',
            cards: '#fff',
            background: '#FDF7F2',
            accent: '#F59256',
            logo: '#111111',
            text: '#111111',
            buttonOW: '#FFF',
            textLight: '#111321',
            primaryText: '#111111',
            newsText: '#111321',
            newsDate: 'rgba(17, 17, 17, 0.6)',
            navBarText: '#181C27',
            searchText: '#535353',
            textRegister: '#3091EB',
            primaryBtnText: '#111111',
            secondatyBtnText: '#FFFFFF',
            hoverBtn: '#FF6101',
            shadowCard: 'rgba(49, 21, 4, 0.07)',
            greyTransp: 'rgba(17, 17, 17, 0.6)',
            inputModal: '#FDF7F2',
            none: 'none',
          }),
    },
    opacity: {
      one: '1',
    },
    transition: {
      backdrop: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
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
        zero: 'zero',
        xxs: '16px',
        xs: '20px',
        s: '32px',
        m: '40px',
        l: '60px',
        xl: '80px',
      },
      m: {
        auto: '0 auto',
        xxs: '12px',
        xs: '16px',
        s: '28px',
        m: '32px',
        l: '40px',
        xl: '42px',
        xxl: '60px',
        xxxl: '90px',
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
      default: 500,
      light: 400,
      semiBold: 600,
      bold: 700,
    },

    lineHeights: {
      s: 1.36,
      m: 1.47,
    },

    borders: {
      mode,
      ...(mode === 'dark'
        ? {
            none: 'none',
            normal: '1px solid',
            inputModal: '2px solid',
            inputBorder: '1px solid rgba(245, 146, 86, 0.5)',
            buttonWhite: '2px solid #F59256;',
          }
        : {
            none: 'none',
            normal: '1px solid',
            inputModal: '2px solid',
            inputBorder: '1px solid rgba(245, 146, 86, 0.5)',
            buttonWhite: '2px solid #F59256;',
          }),
    },
    radii: {
      borderRadius: {
        none: '0',
        btn: '40px',
        inputModal: '20px',
        round: '50%',
        half: '50px',
      },
    },
    backgroundSize: {
      cover: 'cover',
    },
    backgroundRepeat: {
      no: 'no-repeat',
    },
    sizes: {
      width: {
        icon: '50px',
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
        icon: '50px',
        max: '100%',
        auto: 'auto',
        maxScreen: '100vh',
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
      tabletMin: '(max-width: 767px)',
      tablet: '(max-width: 1279px) and (min-width: 768px)',
      tabletDesktop: '(min-width: 768px)',
      desktop: '(min-width: 1280px)',
    },

    display: {
      flex: 'flex',
      box: 'box',
      inlineB: 'inline-block',
      none: 'none',
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
    shadows: {
      mode,
      ...(mode === 'dark'
        ? {
            boxShadow: '7px 4px 14px rgba(99, 99, 99, 1)',
          }
        : { boxShadow: '7px 4px 14px rgba(0, 0, 0, 0.11)' }),
    },
  };
  return theme;
};
