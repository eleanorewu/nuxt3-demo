const scrollToTop = () => {
  if (!document || !window) return
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })
  }
}

export default scrollToTop