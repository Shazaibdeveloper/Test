import {useEffect} from 'react'

function useCDN() {
	function removeJS() {
		window.scrollTo(0, 0)
		document.getElementById('jsload').innerHTML = ''
	}
	function lazyLoadFromCDN(src, callback) {
		const cdn = document.createElement('script')
		cdn.id = "external";
		cdn.async = true;
		cdn.type = "text/javascript";
		cdn.setAttribute("crossorigin", "anonymous");
		cdn.setAttribute('src',src)
		cdn.addEventListener('load', () => callback?.())
		document.getElementById('jsload').appendChild(cdn)

		return void 0
	}
	useEffect(() => {
		removeJS()
		lazyLoadFromCDN('/assets/js/jquery.min.js', function () {
			lazyLoadFromCDN('/assets/js/jquery.easing.js')
			// lazyLoadFromCDN('/assets/js/jquery-validate.js')
			// lazyLoadFromCDN('/assets/js/jquery-fancybox.js')
			// lazyLoadFromCDN('/assets/js/jquery-isotope.min.js')
			lazyLoadFromCDN('/assets/js/bootstrap.min.js')
			lazyLoadFromCDN('/assets/js/bootstrap.bundle.min.js')
			lazyLoadFromCDN('/assets/js/swiper-bundle.min.js')
			lazyLoadFromCDN('/assets/js/swiper.js')
			lazyLoadFromCDN('/assets/js/plugin.js')
			// lazyLoadFromCDN('/assets/js/count-down.js')
			lazyLoadFromCDN('/assets/js/shortcodes.js')
			lazyLoadFromCDN('/assets/js/wow.min.js')
			// lazyLoadFromCDN('/assets/js/countto.js')
			lazyLoadFromCDN('/assets/js/parallax.js')
			// lazyLoadFromCDN('/assets/js/bidzen.js')
			lazyLoadFromCDN('/assets/js/main.js')
			
			
		})
	}, [])

	return null
}

export default useCDN