import Head from 'next/head'

const globalCss = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
  .btn {
    width: 150px;
    text-align: center;
    text-decoration: none;
    font-size: 1.5rem;
    padding: 5px 0;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    transition: box-shadow .2s ease
  }
  .btn:hover {
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`

const css = (isMiddle) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 20,
  ...(isMiddle && { justifyContent: 'center' }),
})

const Box = ({ isMiddle = true, children }) => (
  <>
    <Head>
      <link rel="icon" href="data:," />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <style>{globalCss}</style>
    </Head>
    <div style={css(isMiddle)}>{children}</div>
  </>
)

export { Box }
