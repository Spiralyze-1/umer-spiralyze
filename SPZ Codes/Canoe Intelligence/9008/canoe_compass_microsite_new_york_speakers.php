<?php
$image_url = get_template_directory_uri() . '/assets/img/canoe_compass_microsite_nyc';
?>
<style>
	@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");


	body {
		margin: 0;
		font-family: "Open Sans", sans-serif;
		background: #ECF2F2 !important;
	}

	body::-webkit-scrollbar {
		display: none;
	}
	.hs-web-interactives-top-push-anchor,
	#hs-web-interactives-top-push-anchor,
	div:has(iframe[data-test-id="interactive-frame"]){
		display: none!important;
	}
	footer.footer-main,
	header.header-main {
		display: none !important;
	}

	.content-main {
		padding: 0 !important;
	}

	.spz_hero {
		width: 100%;
		background: #ECF2F2;
		padding: 32px 32px 0;
		box-sizing: border-box;
	}

	.spz_hero *,
	.spz_hero *::before,
	.spz_hero *::after {
		box-sizing: border-box;
	}

	.spz_hero .spz_hero__container {
		position: relative;
		width: 100%;
		border-radius: 24px;
		padding-top: 48px;
		padding-bottom: 0;
		background-image: url("<?php echo $image_url . '/speakers_hero_desktop.webp'; ?>");
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	@media (max-width: 1023px) {
		.spz_hero .spz_hero__container {
			background-image: url("<?php echo $image_url . '/speakers_hero_tablet.webp'; ?>");
		}
	}

	@media (max-width: 767.98px) {
		.spz_hero .spz_hero__container {
			background-image: url("<?php echo $image_url . '/speakers_hero_mobile.webp'; ?>");
		}
	}

	.spz_hero .spz_hero__navbar {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: 2;
	}

	.spz_hero .spz_hero__navbar-inner {
		display: flex;
		align-items: flex-start;
		filter: drop-shadow(0 4px 2px rgba(0, 46, 56, 0.16));
	}

	.spz_hero .spz_hero__navbar-side {
		width: 64px;
		height: 40px;
		overflow: hidden;
		flex-shrink: 0;
	}

	.spz_hero .spz_hero__navbar-side--right {
		transform: translateX(0px) scaleY(-1) rotate(180deg);
	}

	.spz_hero .spz_hero__navbar-side picture {
		display: block;
		width: 100%;
		height: 100%;
	}

	.spz_hero .spz_hero__navbar-element {
		display: block;
		width: 100%;
		height: 100%;
		-o-object-fit: contain;
		object-fit: contain;
	}

	.spz_hero .spz_hero__navbar-links {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 100.5px;
		width: 700px;
		padding: 0 140px;
		background: #ecf2f2;
		flex-shrink: 0;
		margin: 0 -1px;
	}

	.spz_hero .spz_hero__nav-link {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 40px;
		padding-bottom: 16px;
		font-family: "Open Sans", sans-serif;
		font-size: 18px;
		font-weight: 700;
		line-height: 1.4;
		text-align: center;
		text-decoration: none;
		color: rgba(41, 48, 84, 0.7);
		white-space: nowrap;
	}

	.spz_hero .spz_hero__nav-link--active {
		color: #c423f9;
	}

	.spz_hero .spz_hero__nav-link--active .spz_hero__nav-arrow {
		opacity: 1;
		visibility: visible;
	}

	@media (hover: hover) {
		.spz_hero .spz_hero__nav-link:hover {
			color: #c423f9;
		}

		.spz_hero .spz_hero__nav-link:hover .spz_hero__nav-arrow {
			opacity: 1;
			visibility: visible;
		}
	}

	.spz_hero .spz_hero__nav-arrow {
		position: absolute;
		top: 0;
		right: -9.7px;
		width: 13.2px;
		height: 12px;
		opacity: 0;
		visibility: hidden;
		transition: all 0.25s ease-out;
	}

	.spz_hero .spz_hero__mobile-nav {
		display: none;
	}

	.spz_hero .spz_hero__mobile-nav__bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		width: 100%;
		height: 58px;
		padding: 18px 20px;
		box-sizing: border-box;
		background: #fff;
		filter: drop-shadow(0 4px 2px rgba(0, 46, 56, 0.16));
	}

	.spz_hero .spz_hero__mobile-nav__current.spz_hero__nav-link {
		flex-shrink: 0;
		height: auto;
		padding-bottom: 0;
		font-size: 18px;
	}

	@media (max-width: 767.98px) {
		.spz_hero .spz_hero__mobile-nav__current.spz_hero__nav-link {
			font-size: 16px;
			line-height: 22.4px;
		}
	}

	.spz_hero .spz_hero__mobile-nav__toggle {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 4px;
		width: 24px;
		height: 24px;
		padding: 0;
		margin: 0;
		border: none;
		background: none;
		cursor: pointer;
		flex-shrink: 0;
	}

	.spz_hero .spz_hero__mobile-nav__toggle-line {
		display: block;
		width: 100%;
		height: 2px;
		border-radius: 1px;
		background: rgba(41, 48, 84, 0.7);
		transition: transform 0.25s ease, opacity 0.25s ease;
	}

	.spz_hero .spz_hero__mobile-nav__toggle[aria-expanded=true] .spz_hero__mobile-nav__toggle-line:nth-child(1) {
		transform: translateY(6px) rotate(45deg);
	}

	.spz_hero .spz_hero__mobile-nav__toggle[aria-expanded=true] .spz_hero__mobile-nav__toggle-line:nth-child(2) {
		opacity: 0;
	}

	.spz_hero .spz_hero__mobile-nav__toggle[aria-expanded=true] .spz_hero__mobile-nav__toggle-line:nth-child(3) {
		transform: translateY(-6px) rotate(-45deg);
	}

	.spz_hero__mobile-menu {
		position: fixed;
		inset: 0;
		z-index: 10000;
		pointer-events: none;
		visibility: hidden;
	}

	.spz_hero__mobile-menu.is-open {
		pointer-events: auto;
		visibility: visible;
	}

	.spz_hero__mobile-menu__overlay {
		position: absolute;
		inset: 0;
		background: rgba(31, 38, 70, 0.63);
		backdrop-filter: blur(8px);
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.spz_hero__mobile-menu.is-open .spz_hero__mobile-menu__overlay {
		opacity: 1;
	}

	.spz_hero__mobile-menu__panel {
		position: relative;
		z-index: 1;
		background: #fff;
		padding: 24px 20px 32px;
		transform: translateY(-100%);
		transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
		box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
	}

	.spz_hero__mobile-menu.is-open .spz_hero__mobile-menu__panel {
		transform: translateY(0);
	}

	.spz_hero__mobile-menu__links {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
		margin: 0;
		padding: 0;
	}

	.spz_hero__mobile-menu__links .spz_hero__nav-link {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: auto;
		padding-bottom: 0;
		font-family: "Open Sans", sans-serif;
		font-size: 18px;
		font-weight: 700;
		line-height: 1.4;
		text-align: center;
		text-decoration: none;
		color: rgba(41, 48, 84, 0.7);
		white-space: nowrap;
	}

	@media (hover: hover) {
		.spz_hero__mobile-menu__links .spz_hero__nav-link:hover {
			color: #c423f9;
		}
	}

	body.spz_hero__mobile-menu-open {
		overflow: hidden !important;
		max-height: 100vh !important;
	}

	.spz_hero .spz_hero__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 33px;
		width: 100%;
		padding: 80px 0 56px;
	}

	.spz_hero .spz_hero__logo {
		position: relative;
		width: 554.782px;
		height: 176px;
		flex-shrink: 0;
	}

	.spz_hero .spz_hero__logo-grp {
		position: absolute;
		inset: 0;
		top: -13px;
	}

	.spz_hero .spz_hero__logo-grp img {
		display: block;
		width: 100%;
		max-width: 100%;
		-o-object-fit: contain;
		object-fit: contain;
	}

	.spz__compass-hero__logistics {
		display: flex;
		align-items: center;
		gap: 8.5px;
		margin: 25px 0 22px;
	}

	@media (max-width: 767.98px) {
		.spz__compass-hero__logistics {
			gap: 17px !important;
			margin: 16px 0 22px;
			padding: 0 24px;
			flex-direction: column;
		}
	}

	.spz_hero .spz__compass-hero__logistics span {
		color: #FFF;
		font-family: "Open Sans";
		font-size: 25px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%;
		margin-top: -4px;
	}

	@media (max-width: 1023px) {
		.spz_hero .spz__compass-hero__logistics span {
			font-size: 22px;
			line-height: 140%;
			text-align: center;
		}
	}

	@media (max-width: 767.98px) {
		.spz_hero .spz__compass-hero__logistics span {
			font-size: 18px;
			line-height: 25.2px;
		}

		.spz_hero .spz__compass-hero__logistics span:nth-of-type(1) {
			min-width: 131px;
		}

		.spz_hero .spz__compass-hero__logistics span:nth-of-type(2) {
			min-width: 109px;
			transform: none;
		}
	}

	.spz_hero .spz__compass-hero__logistics span:last-child {
		transform: translateX(-0.5px);
	}

	.spz_hero .spz__compass-hero__logistics picture {
		flex-shrink: 0;
		width: 35px;
		height: 35px;
		transform: translateX(2px);
	}

	@media (max-width: 767.98px) {
		.spz_hero .spz__compass-hero__logistics picture {
			display: none;
		}
	}

	.webinar__container {
		max-width: 1300px;
		margin: 0 auto;
		padding: 0 40px;
	}

	@media (min-width: 768px) and (max-width: 1023.98px) {
		.webinar__container {
			padding: 0 24px;
		}
	}

	@media (max-width: 767.98px) {
		.webinar__container {
			padding: 0 24px;
		}
	}

	@media (max-width: 767.98px) {
		.webinar__container {
			padding: 0 20px;
		}
	}

	.spz__compass__contact {
		position: relative;
		overflow: hidden;
		border-radius: 24px;
		background-color: #293054;
		padding: 120px 20px 120px;
		background-image: url("<?php echo $image_url . '/speakers_coontact_desktop.webp'; ?>");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center top;
		max-width: calc(100% - 64px);
		margin: 0 auto 32px;
	}

	.spz__compass__contact__container {
		max-width: 1220px;
		width: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		z-index: 2;
	}

	.spz__compass__contact__container img {
		max-width: 353px;
	}

	.spz__compass__contact__container p {
		color: #FFF;
		text-align: center;
		font-family: "DM Serif Display";
		font-size: 48px;
		font-style: normal;
		font-weight: 400;
		line-height: 52.8px;
		margin: 32.5px 0 44px;
		padding: 0;
	}

	@media (max-width: 1023px) {
		.spz__compass__contact__container p {
			font-size: 48px;
		}
	}

	.spz__compass__contact__actions {
		display: flex;
		gap: 20px;
	}

	.spz__compass__contact__actions__button {
		border-radius: 100px;
		background: #C423F9;
		height: 56px;
		width: 178px;
		padding: 0 32px;
		border: none;
		outline: none;
		box-shadow: none;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		color: #FFF;
		text-align: center;
		font-family: "Open Sans";
		font-size: 18px;
		font-style: normal;
		font-weight: 700;
		line-height: 135%;
		text-transform: none;
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		text-transform: uppercase;
	}

	@media (max-width: 767.98px) {
		.spz__compass__contact__actions__button {
			height: 48px;
			width: 100%;
			font-size: 14px;
			line-height: 18.9px;
			max-width: 360px;
			margin: auto;
		}
	}

	.spz__compass__contact__actions__button:hover {
		background: #1BFFC3;
		color: #293054;
		text-decoration: none;
	}

	.spz__compass__contact__actions__button.secondary {
		background: transparent;
		border: 1px solid #1BFFC3;
		color: #1BFFC3;
		text-decoration: none;
	}

	.spz__compass__contact__actions__button.secondary:hover {
		background: #1BFFC3;
		color: #293054;
	}

	@media (max-width: 1023px) {
		.spz_hero {
			padding: 32px 24px 0;
		}

		.spz_hero .spz_hero__navbar {
			left: 79px;
			right: 0;
			width: auto;
			max-width: calc(100% - 158px);
			transform: none;
		}

		.spz_hero .spz_hero__navbar-inner {
			width: 100%;
			max-width: 100%;
		}

		.spz_hero .spz_hero__navbar-links {
			flex: 1 1 0;
			flex-shrink: 1;
			min-width: 0;
			width: auto;
			padding: 0 140px;
			gap: 100.5px;
		}

		.spz_hero .spz_hero__content {
			padding: 80px 0 56px;
		}

		.spz_hero .spz_hero__logo {
			width: min(554.782px, 100%);
			max-width: 100%;
		}

		.spz__compass-hero__logistics {
			margin: 4.5px 0px 19.5px;
			gap: 15.5px !important;
		}

		.spz__compass__contact {
			background-image: url("<?php echo $image_url . '/speakers_coontact_tablet.webp'; ?>");
			max-width: calc(100% - 48px);
			margin: 0 auto 32px;
		}
	}

	@media (max-width: 767.98px) {
		.spz_hero {
			padding: 0;
		}

		.spz_hero .spz_hero__container {
			border-radius: 0 0 24px 24px;
			padding-top: 0;
			background-size: calc(100% + 200px);
		}

		.spz_hero .spz_hero__navbar {
			display: none;
		}

		.spz_hero .spz_hero__mobile-nav {
			display: block;
			position: relative;
			width: 100%;
			z-index: 2;
		}

		.spz_hero .spz_hero__content {
			padding: 40px 0 60px;
			gap: 24px;
		}

		.spz_hero .spz_hero__logo {
			width: min(297px, 100% - 31.5px);
			height: auto;
		}

		.spz_hero .spz_hero__logo-blur {
			width: min(444px, 150%);
			height: auto;
			aspect-ratio: 888/380;
		}

		.spz_hero .spz_hero__logo-grp {
			position: relative;
			top: -15px;
		}

		.spz__compass__contact {
			max-width: calc(100% - 40px);
			padding: 80px 20px;
			background-image: url("<?php echo $image_url . '/speakers_coontact_mobile.webp'; ?>");
		}

		.spz__compass__contact::before {
			display: none;
		}

		.spz__compass__contact__actions__button {
			margin: 0 auto;
		}

		.spz__compass__contact__container p {
			font-size: 28px;
			line-height: 30.8px;
			margin: 32.5px 0 32px;
		}

		.spz__compass__contact__container p br {
			display: none;
		}

		.spz__compass__contact__actions {
			flex-direction: column;
			width: 100%;
		}

		.spz__compass__contact__actions a:nth-child(2) {
			max-width: 296px;
			margin: 0 auto;
		}

		.spz__compass__contact__container img {
			max-width: 252px;
		}
	}

	.ci_speakers {
		background-color: #ECF2F2;
		background-image: url("<?php echo $image_url . '/speakers_desktop.webp'; ?>");
		background-size: cover;
		background-repeat: no-repeat;
		padding: 80px 0;
	}

	@media (min-width: 768px) and (max-width: 1023.98px) {
		.ci_speakers {
			background-image: url("<?php echo $image_url . '/speakers_tablet.webp'; ?>");
		}
	}

	@media (max-width: 767.98px) {
		.ci_speakers {
			padding: 64.5px 0;
			background-image: url("<?php echo $image_url . '/speakers_mobile.webp'; ?>");
		}
	}

	.ci_speakersDetail {
		display: flex;
		flex-wrap: wrap;
		gap: 24px;
		padding-bottom: 80.5px;
	}

	@media (min-width: 768px) and (max-width: 1023.98px) {
		.ci_speakersDetail {
			padding-bottom: 40.5px;
		}
	}

	@media (max-width: 767.98px) {
		.ci_speakersDetail {
			gap: 23.5px;
			padding-bottom: 31px;
		}
	}

	.ci_spekaerDetail_left {
		width: calc(50% - 12px);
	}

	.ci_spekaerDetail_left h2 {
		color: #293054;
		font-family: "DM Serif Display";
		font-size: 48px;
		font-weight: 400;
		line-height: 52.8px;
		padding-bottom: 0;
	}

	@media (min-width: 768px) and (max-width: 1023.98px) {
		.ci_spekaerDetail_left {
			width: 100%;
		}
	}

	@media (max-width: 767.98px) {
		.ci_spekaerDetail_left {
			width: 100%;
		}

		.ci_spekaerDetail_left h2 {
			font-size: 36px;
			font-weight: 400;
			line-height: 39.6px;
		}
	}

	.ci_spekaerDetail_right {
		width: calc(50% - 12px);
	}

	.ci_spekaerDetail_right p {
		color: #293054;
		font-family: "Open Sans";
		font-size: 22px;
		font-weight: 400;
		line-height: 30.8px;
		padding-bottom: 0;
	}

	.ci_spekaerDetail_right p strong {
		font-weight: 700;
	}

	.ci_spekaerDetail_right p:nth-of-type(1) {
		margin-bottom: 32px;
	}

	@media (min-width: 768px) and (max-width: 1023.98px) {
		.ci_spekaerDetail_right {
			width: 100%;
		}
	}

	@media (max-width: 767.98px) {
		.ci_spekaerDetail_right {
			width: 100%;
		}

		.ci_spekaerDetail_right p {
			font-size: 18px;
			line-height: 25.2px;
		}

		.ci_spekaerDetail_right p:nth-of-type(1) {
			margin-bottom: 24px;
		}
	}

	.ci_speakerList {
		display: flex;
		align-items: flex-start;
		gap: 24px;
	}

	.ci_col {
		flex: 1 1 0;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.ci_speaker_item {
		display: flex;
		gap: 32px;
		padding: 32px;
		border-radius: 0 24px;
		background: linear-gradient(120deg, rgba(255, 255, 255, 0.1) 0%, rgba(27, 255, 195, 0.1) 26.2%, rgba(255, 255, 255, 0.1) 66.03%), #FFF;
	}

	@media (min-width: 1024px) and (max-width: 1299px) {
		.ci_speaker_item {
			padding: 16px;
			gap: 10px;
		}
	}

	@media (max-width: 767.98px) {
		.ci_speaker_item {
			padding: 32px 16px;
			flex-wrap: wrap;
		}

		.ci_speaker_item:last-child .ci_speaker_right p {
			padding-right: 0.5px;
		}
	}

	.ci_speaker_left {
		width: 214px;
		height: 246px;
	}

	.ci_speaker_left picture {
		display: block;
	}

	.ci_speaker_left picture img {
		display: block;
		border-radius: 8px;
	}

	@media (min-width: 1024px) and (max-width: 1299px) {
		.ci_speaker_left {
			width: 180px;
		}
	}

	@media (max-width: 767.98px) {
		.ci_speaker_left {
			width: 100%;
			max-width: 300px;
			height: auto;
		}
	}

	.ci_speaker_right {
		width: calc(100% - 246px);
	}

	.ci_speaker_right h3 {
		color: #293054;
		font-family: "Open Sans";
		font-size: 22px;
		font-weight: 700;
		line-height: 30.8px;
		padding-bottom: 4px;
	}

	.ci_speaker_right h4 {
		color: #C423F9;
		font-family: "Open Sans";
		font-size: 14px;
		font-weight: 600;
		line-height: 18.9px;
		padding-bottom: 16px;
	}

	.ci_speaker_right p {
		color: #293054;
		font-family: "Open Sans";
		font-size: 16px;
		font-weight: 400;
		line-height: 22px;
		padding-bottom: 32px;
	}

	.ci_speaker_right small {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.ci_speaker_right small span {
		display: inline-block;
	}

	.ci_speaker_right small span img {
		display: block;
	}

	.ci_speaker_right small a {
		display: inline-block;
	}

	@media (min-width: 1024px) and (max-width: 1299px) {
		.ci_speaker_right {
			width: calc(100% - 180px);
		}

		.ci_speaker_right p {
			font-size: 12px;
			line-height: 16.6px;
		}
	}

	@media (max-width: 767.98px) {
		.ci_speaker_right {
			width: 100%;
		}

		.ci_speaker_right h3 {
			font-size: 18px;
			line-height: 25.2px;
		}

		.ci_speaker_right h4 {
			font-size: 12px;
			line-height: 16.2px;
		}

		.ci_speaker_right p {
			font-size: 14px;
			line-height: 19.6px;
			padding-bottom: 35px;
		}
	}

	@media (max-width: 1023px) {
		.ci_speakerList {
			flex-direction: column;
		}

		/* wrappers disappear; cards become direct flex items of the list */
		.ci_col {
			display: contents;
		}

		/* restore original order: Minoo, Bryan, Christine, Mike */
		.ci_col:first-child .ci_speaker_item:first-child {
			order: 1;
		}

		/* Minoo */
		.ci_col:last-child .ci_speaker_item:first-child {
			order: 2;
		}

		/* Bryan */
		.ci_col:first-child .ci_speaker_item:last-child {
			order: 3;
		}

		/* Christine */
		.ci_col:last-child .ci_speaker_item:last-child {
			order: 4;
		}

		/* Mike */
	}

	.ci_teamImage {
		padding-bottom: 97px;
	}

	.ci_teamImage picture {
		display: block;
	}

	.ci_teamImage picture img {
		display: block;
		width: 100%;
		max-width: 1920px;
		margin: 0 auto;
	}

	@media (min-width: 768px) and (max-width: 1023.98px) {
		.ci_teamImage {
			padding-left: 24px;
		}
	}

	@media (max-width: 767.98px) {
		.ci_teamImage {
			padding-left: 20px;
			padding-bottom: 80px;
			overflow: hidden;
		}

		.ci_teamImage picture {
			width: 806px;
		}
	}
  .content-main{
		background: #fff;
	}
	.ci_team {
		padding: 80px 0 79.5px;
		background: #fff;
	}

	@media (max-width: 767.98px) {
		.ci_team {
			padding: 64px 0 61.5px;
		}
	}

	.ci_team .ci_speakersDetail {
		padding-bottom: 80px;
	}

	@media (min-width: 768px) and (max-width: 1023.98px) {
		.ci_team .ci_speakersDetail {
			gap: 17px;
			padding-bottom: 79.5px;
		}
	}

	@media (max-width: 767.98px) {
		.ci_team .ci_speakersDetail {
			gap: 16px;
			padding-bottom: 62.5px;
		}
	}

	.ci_team .ci_speakersDetail .ci_spekaerDetail_left {
		width: calc(44% - 15px);
	}

	@media (min-width: 768px) and (max-width: 1023.98px) {
		.ci_team .ci_speakersDetail .ci_spekaerDetail_left {
			width: 100%;
		}

		.ci_team .ci_speakersDetail .ci_spekaerDetail_left h2 br {
			display: none;
		}
	}

	@media (max-width: 767.98px) {
		.ci_team .ci_speakersDetail .ci_spekaerDetail_left {
			width: 100%;
		}

		.ci_team .ci_speakersDetail .ci_spekaerDetail_left h2 br {
			display: none;
		}
	}

	.ci_team .ci_speakersDetail .ci_spekaerDetail_right {
		width: calc(56% - 15px);
	}

	.ci_team .ci_speakersDetail .ci_spekaerDetail_right p {
		font-size: 18px;
		line-height: 25.2px;
	}

	.ci_team .ci_speakersDetail .ci_spekaerDetail_right p:nth-of-type(1) {
		margin-bottom: 24px;
	}

	@media (min-width: 768px) and (max-width: 1023.98px) {
		.ci_team .ci_speakersDetail .ci_spekaerDetail_right {
			width: 100%;
		}

		.ci_team .ci_speakersDetail .ci_spekaerDetail_right p {
			padding-right: 40px;
		}
	}

	@media (max-width: 767.98px) {
		.ci_team .ci_speakersDetail .ci_spekaerDetail_right {
			width: 100%;
		}

		.ci_team .ci_speakersDetail .ci_spekaerDetail_right p {
			font-size: 16px;
			line-height: 22.4px;
		}

		.ci_team .ci_speakersDetail .ci_spekaerDetail_right p:nth-of-type(1) {
			margin-bottom: 20px;
		}
	}

	.ci_leadership_list {
		display: flex;
		gap: 0 64px;
	}

	@media (min-width: 768px) and (max-width: 1023.98px) {
		.ci_leadership_list {
			flex-wrap: wrap;
			gap: 56.7px 0;
		}
	}

	@media (max-width: 767.98px) {
		.ci_leadership_list {
			flex-wrap: wrap;
			gap: 47px 0;
		}
	}

	.ci_leadershipItem {
		width: calc(33.33% - 42.66px);
	}

	.ci_leadershipItem h3 {
		color: #293054;
		font-family: "Open Sans";
		font-size: 22px;
		font-weight: 400;
		line-height: 29.7px;
		text-transform: uppercase;
		margin-bottom: 36px;
		padding-bottom: 0;
	}

	@media (min-width: 768px) and (max-width: 1023.98px) {
		.ci_leadershipItem {
			width: 100%;
		}

		.ci_leadershipItem h3 br {
			display: none;
		}
	}

	@media (max-width: 767.98px) {
		.ci_leadershipItem {
			width: 100%;
		}

		.ci_leadershipItem h3 {
			font-size: 16px;
			line-height: 21.6px;
			margin-bottom: 28px;
		}

		.ci_leadershipItem h3 br {
			display: none;
		}
	}

	.ci_leadership_data {
		padding-left: 19px;
		border-left: 1px solid #293054;
	}

	.ci_leadership_data:not(:last-child) {
		padding-bottom: 24.5px;
	}

	.ci_leadership_data strong, 
	.ci_leadership_data a {
		display: inline-block;
		color: #293054;
		font-family: "Open Sans";
		font-size: 22px;
		font-weight: 700;
		line-height: 30.8px;
		text-decoration: none!important;
	}

	.ci_leadership_data span {
		display: block;
		color: rgba(41, 48, 84, 0.5);
		font-family: "Open Sans";
		font-size: 22px;
		font-weight: 400;
		line-height: 30.8px;
	}

	@media (min-width: 768px) and (max-width: 1023.98px) {
		.ci_leadership_data {
			display: flex;
			gap: 0 6px;
		}

		.ci_leadership_data:not(:last-child) {
			padding-bottom: 24.2px;
		}
	}

	@media (max-width: 767.98px) {
		.ci_leadership_data {
			display: flex;
			gap: 0 6px;
			padding-left: 11px;
		}

		.ci_leadership_data strong,
		.ci_leadership_data a,
		.ci_leadership_data span {
			display: contents;
			font-size: 18px;
			line-height: 25.2px;
		}

		.ci_leadership_data:not(:last-child) {
			padding-bottom: 22.45px;
		}
	}

	/*# sourceMappingURL=9008_v1.css.map */
</style>

<section class="spz_hero">
	<div class="spz_hero__container">
		<nav class="spz_hero__navbar">
			<div class="spz_hero__navbar-inner">
				<div class="spz_hero__navbar-side">
					<picture>
						<source media="(max-width: 767.98px)"
							srcset="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/microsite/speakers/nav-element-mobile.svg">
						<img
							src="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/microsite/speakers/nav-element.svg"
							alt="navbar curve" class="spz_hero__navbar-element">
					</picture>
				</div>
				<div class="spz_hero__navbar-links">
					<a href="https://canoeintelligence.com/canoe-compass-nyc-2026-home/" class="spz_hero__nav-link">
						Home
						<img
							src="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/microsite/nav-arrow.svg"
							alt="arrow" class="spz_hero__nav-arrow">
					</a>
					<a href="javascript:void(0);" class="spz_hero__nav-link spz_hero__nav-link--active">
						Speakers
						<img
							src="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/microsite/nav-arrow.svg"
							alt="arrow" class="spz_hero__nav-arrow">
					</a>
					<a href="https://canoeintelligence.com/canoe-compass-nyc-resources-2026/" class="spz_hero__nav-link">
						Resources
						<img
							src="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/microsite/nav-arrow.svg"
							alt="arrow" class="spz_hero__nav-arrow">
					</a>
				</div>
				<div class="spz_hero__navbar-side spz_hero__navbar-side--right">
					<picture>
						<source media="(max-width: 767.98px)"
							srcset="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/microsite/speakers/nav-element-mobile.svg">
						<img
							src="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/microsite/speakers/nav-element.svg"
							alt="navbar curve" class="spz_hero__navbar-element perfmatters-lazy entered pmloaded">
					</picture>
				</div>
			</div>
		</nav>

		<div class="spz_hero__mobile-nav">
			<div class="spz_hero__mobile-nav__bar">
				<span class="spz_hero__nav-link spz_hero__nav-link--active spz_hero__mobile-nav__current">
					Speakers
					<img
						src="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/microsite/nav-arrow.svg"
						alt="" class="spz_hero__nav-arrow">
				</span>
				<button type="button" class="spz_hero__mobile-nav__toggle" aria-label="Open menu" aria-expanded="false"
					aria-controls="spz_hero__mobile-menu">
					<span class="spz_hero__mobile-nav__toggle-line"></span>
					<span class="spz_hero__mobile-nav__toggle-line"></span>
					<span class="spz_hero__mobile-nav__toggle-line"></span>
				</button>
			</div>
		</div>

		<div class="spz_hero__content">
			<div class="spz_hero__logo">
				<!-- <div class="spz_hero__logo-blur">
				</div> -->
				<div class="spz_hero__logo-grp">
					<picture>
						<source media="(max-width: 767.98px)" srcset="<?php echo $image_url . '/logo_mobile_new.svg'; ?>">
						<img src="<?php echo $image_url . '/logo_desktop_new.svg'; ?>" alt="Logo Canoe Compass">
					</picture>
				</div>
			</div>

			<div class="spz__compass-hero__logistics">
				<span>Wednesday, October 14, 2026</span>
				<picture>
					<source media="(max-width: 767.98px)"
						srcset="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/spz_compass_star_pink_large.svg">
					<img
						src="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/spz_compass_star_pink_small.svg"
						alt="Logistics Separator" class="perfmatters-lazy entered pmloaded">
				</picture>
				<span>The Assembly, New York</span>
			</div>

		</div>
	</div>
</section>

<div id="spz_hero__mobile-menu" class="spz_hero__mobile-menu" aria-hidden="true">
	<div class="spz_hero__mobile-menu__overlay" aria-hidden="true"></div>
	<div class="spz_hero__mobile-menu__panel">
		<nav class="spz_hero__mobile-menu__links" aria-label="Microsite navigation">
			<a href="https://canoeintelligence.com/canoe-compass-nyc-2026-home/" class="spz_hero__nav-link">Home</a>
			<a href="https://canoeintelligence.com/canoe-compass-nyc-resources-2026/" class="spz_hero__nav-link">Resources</a>
		</nav>
	</div>
</div>

<section class="ci_speakers">
	<div class="webinar__container">
		<div class="ci_speakersInner">
			<div class="ci_speakersDetail">
				<div class="ci_spekaerDetail_left">
					<h2>Meet our speakers.</h2>
				</div>
				<div class="ci_spekaerDetail_right">
					<p><strong>The voices shaping the future of alternative investment data.</strong> We are thrilled to
						welcome a
						distinguished lineup of industry leaders, innovators, and experts to the stage. </p>
					<p>These speakers bring a wealth of experience from across the global financial landscape to share
						their
						insights on automation, institutional strategy, and the road ahead.</p>
				</div>
			</div>
			<div class="ci_speakerList">
				<div class="ci_col">
					<div class="ci_speaker_item">
						<div class="ci_speaker_left">
							<picture>
								<source media="(max-width: 767.98px)" srcset="<?php echo $image_url . '/speaker_mino_mobile.webp'; ?>">
								<img src="<?php echo $image_url . '/speaker_mino_desktop.webp'; ?>" alt="Minoo Soleymani">
							</picture>
						</div>
						<div class="ci_speaker_right">
							<h3>Minoo Soleymani</h3>
							<h4>Senior Relationship Manager</h4>
							<p>Minoo Soleymani is a Senior Relationship Manager at Canoe Intelligence, where she has
								spent over four
								years helping wealth and institutional clients get value from alternative investment
								data automation.
								Based in New York, she began her time with Canoe working on the Implementations team
								across all client
								groups.</p>
							<small>
								<span>
									<img src="<?php echo $image_url . '/speaker_mino_ci.svg'; ?>" alt="Canoe">
								</span>
							</small>
						</div>
					</div>
					<div class="ci_speaker_item">
						<div class="ci_speaker_left">
							<picture>
								<source media="(max-width: 767.98px)"
									srcset="<?php echo $image_url . '/speaker_christine_mobile.webp'; ?>">
								<img src="<?php echo $image_url . '/speaker_christine_desktop.webp'; ?>" alt="Christine Iannacone">
							</picture>
						</div>
						<div class="ci_speaker_right">
							<h3>Christine Iannacone</h3>
							<h4>Head of Investment Office Operations - HPC</h4>
							<p>Christine Iannacone is a Vice President at Prudential Financial. Christine is the Head of
								Investment
								Performance Reporting and Analysis within the Chief Investment Office. She is
								responsible for
								performance analysis, client reporting, and marketing presentations for the investments
								of the general
								account and clients of Prudential Select Strategies LLC. Prior to joining Prudential,
								Christine was with
								Goldman Sachs Asset Management, where she was a Vice President in the Alternative
								Investments & Manager
								Selection Group. She managed the Performance Analytics and Client Reporting teams for
								the Hedge Fund
								Strategies Group. Previously, she worked in Fixed Income Investment Performance and
								Portfolio
								Administration where she managed the performance team. Prior to joining Goldman Sachs,
								she worked as a
								securities analyst at SEI Investments. Christine received a Bachelor of Science in
								Economics from The
								Pennsylvania State University and a Master of Business Administration with a
								concentration in Finance
								from LaSalle University. She is a CIPM® certificate holder and an active volunteer for
								the CFA
								Institute. Christine serves on the advisory board of The Journal of Performance
								Measurement.
							</p>
							<small>
								<span>
									<!-- <img
										src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1791191491/canoeintelligence/9008/frame_2147217492.svg"
										alt="Prudential"> -->
								</span>
								<a href="https://www.linkedin.com/in/christineiannacone/" target="_blank">
									<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
										<g clip-path="url(#clip0_31102_2084)">
											<rect width="28" height="28" rx="2" fill="white" />
											<path
												d="M25.9331 0H2.06694C1.51876 0 0.993022 0.217767 0.605394 0.605394C0.217767 0.993022 0 1.51876 0 2.06694V25.9331C0 26.4812 0.217767 27.007 0.605394 27.3946C0.993022 27.7822 1.51876 28 2.06694 28H25.9331C26.4812 28 27.007 27.7822 27.3946 27.3946C27.7822 27.007 28 26.4812 28 25.9331V2.06694C28 1.51876 27.7822 0.993022 27.3946 0.605394C27.007 0.217767 26.4812 0 25.9331 0ZM8.34556 23.8525H4.13583V10.4806H8.34556V23.8525ZM6.23778 8.6275C5.76026 8.62481 5.29423 8.48073 4.89852 8.21344C4.50281 7.94614 4.19515 7.56762 4.01436 7.12564C3.83357 6.68365 3.78776 6.19802 3.8827 5.73003C3.97765 5.26204 4.2091 4.83266 4.54785 4.49608C4.88659 4.1595 5.31745 3.93081 5.78604 3.83887C6.25464 3.74693 6.73996 3.79586 7.18078 3.97948C7.62159 4.16311 7.99813 4.47319 8.26288 4.87061C8.52762 5.26803 8.66871 5.73497 8.66833 6.2125C8.67284 6.53221 8.61293 6.84955 8.49218 7.14561C8.37143 7.44166 8.19231 7.71038 7.9655 7.93574C7.73869 8.16111 7.46882 8.3385 7.17199 8.45734C6.87517 8.57619 6.55745 8.63406 6.23778 8.6275ZM23.8622 23.8642H19.6544V16.5589C19.6544 14.4044 18.7386 13.7394 17.5564 13.7394C16.3081 13.7394 15.0831 14.6806 15.0831 16.6133V23.8642H10.8733V10.4903H14.9217V12.3433H14.9761C15.3825 11.5208 16.8058 10.115 18.9778 10.115C21.3267 10.115 23.8642 11.5092 23.8642 15.5925L23.8622 23.8642Z"
												fill="#0A66C2" />
										</g>
										<defs>
											<clipPath id="clip0_31102_2084">
												<rect width="28" height="28" rx="2" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</a>
							</small>
						</div>
					</div>
				</div>
				<div class="ci_col">
					<div class="ci_speaker_item">
						<div class="ci_speaker_left">
							<picture>
								<source media="(max-width: 767.98px)" srcset="<?php echo $image_url . '/speaker_bryan_mobile.webp'; ?>">
								<img src="<?php echo $image_url . '/speaker_bryan_desktop.webp'; ?>" alt="Bryan Targosz">
							</picture>
						</div>
						<div class="ci_speaker_right">
							<h3>Bryan Targosz</h3>
							<h4>Partnership Accounting Manager</h4>
							<p>As a Senior Manager Accounting – Investments of Briar Hall, Bryan
								provides critical support to the investment professionals at Briar Hall.
								Bryan oversees the monthly close process of all private equity funds
								and he is responsible for providing private equity cash flow forecasts
								to investors. Bryan’s background includes more than 15 years of private equity
								experience. Prior to
								joining Briar Hall, he worked for Northern Trust
								Hedge Fund Services. Bryan earned his Bachelor of Science degree in Accounting and
								Finance at Illinois
								State University. Bryan has been a registered Certified Public Accountant since 2009.
							</p>
							<small>
								<span>
									<img src="<?php echo $image_url . '/lgt_logo-3.svg'; ?>" alt="LGT">
								</span>
								<a href="https://www.linkedin.com/in/bryan-targosz-cpa-18a61865" target="_blank">
									<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
										<g clip-path="url(#clip0_31102_2084)">
											<rect width="28" height="28" rx="2" fill="white" />
											<path
												d="M25.9331 0H2.06694C1.51876 0 0.993022 0.217767 0.605394 0.605394C0.217767 0.993022 0 1.51876 0 2.06694V25.9331C0 26.4812 0.217767 27.007 0.605394 27.3946C0.993022 27.7822 1.51876 28 2.06694 28H25.9331C26.4812 28 27.007 27.7822 27.3946 27.3946C27.7822 27.007 28 26.4812 28 25.9331V2.06694C28 1.51876 27.7822 0.993022 27.3946 0.605394C27.007 0.217767 26.4812 0 25.9331 0ZM8.34556 23.8525H4.13583V10.4806H8.34556V23.8525ZM6.23778 8.6275C5.76026 8.62481 5.29423 8.48073 4.89852 8.21344C4.50281 7.94614 4.19515 7.56762 4.01436 7.12564C3.83357 6.68365 3.78776 6.19802 3.8827 5.73003C3.97765 5.26204 4.2091 4.83266 4.54785 4.49608C4.88659 4.1595 5.31745 3.93081 5.78604 3.83887C6.25464 3.74693 6.73996 3.79586 7.18078 3.97948C7.62159 4.16311 7.99813 4.47319 8.26288 4.87061C8.52762 5.26803 8.66871 5.73497 8.66833 6.2125C8.67284 6.53221 8.61293 6.84955 8.49218 7.14561C8.37143 7.44166 8.19231 7.71038 7.9655 7.93574C7.73869 8.16111 7.46882 8.3385 7.17199 8.45734C6.87517 8.57619 6.55745 8.63406 6.23778 8.6275ZM23.8622 23.8642H19.6544V16.5589C19.6544 14.4044 18.7386 13.7394 17.5564 13.7394C16.3081 13.7394 15.0831 14.6806 15.0831 16.6133V23.8642H10.8733V10.4903H14.9217V12.3433H14.9761C15.3825 11.5208 16.8058 10.115 18.9778 10.115C21.3267 10.115 23.8642 11.5092 23.8642 15.5925L23.8622 23.8642Z"
												fill="#0A66C2" />
										</g>
										<defs>
											<clipPath id="clip0_31102_2084">
												<rect width="28" height="28" rx="2" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</a>
							</small>
						</div>
					</div>
					<div class="ci_speaker_item">
						<div class="ci_speaker_left">
							<picture>
								<source media="(max-width: 767.98px)" srcset="<?php echo $image_url . '/speaker_mike_mobile.webp'; ?>">
								<img src="<?php echo $image_url . '/speaker_mike_desktop.webp'; ?>" alt="Mike Jackson">
							</picture>
						</div>
						<div class="ci_speaker_right">
							<h3>Mike Jackson</h3>
							<h4>Executive Director of Finance</h4>
							<p>Mr. Jackson shares responsibility for the firm’s fund finance operations, with a focus on
								private
								equity, real estate & infrastructure investments. Earlier in his GCM Grosvenor career,
								Mr. Jackson held
								roles within fund finance operations focusing on carried interest plans & absolute
								return strategies.
								Prior to joining GCM Grosvenor in 2008, he was an Associate at Jenkins, Magnus, Volk &
								Carroll, where he
								prepared tax returns & audited small businesses. Mr. Jackson received his Bachelor of
								Science in
								Accounting and Finance with honors from the University of Dayton. He is a Certified
								Public Accountant.
							</p>
							<small>
								<span>
									<img src="<?php echo $image_url . '/grossover.svg'; ?>" alt="Grosvenor">
								</span>
								<a href="https://www.linkedin.com/in/mike-jackson-4279781/" target="_blank">
									<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
										<g clip-path="url(#clip0_31102_2084)">
											<rect width="28" height="28" rx="2" fill="white" />
											<path
												d="M25.9331 0H2.06694C1.51876 0 0.993022 0.217767 0.605394 0.605394C0.217767 0.993022 0 1.51876 0 2.06694V25.9331C0 26.4812 0.217767 27.007 0.605394 27.3946C0.993022 27.7822 1.51876 28 2.06694 28H25.9331C26.4812 28 27.007 27.7822 27.3946 27.3946C27.7822 27.007 28 26.4812 28 25.9331V2.06694C28 1.51876 27.7822 0.993022 27.3946 0.605394C27.007 0.217767 26.4812 0 25.9331 0ZM8.34556 23.8525H4.13583V10.4806H8.34556V23.8525ZM6.23778 8.6275C5.76026 8.62481 5.29423 8.48073 4.89852 8.21344C4.50281 7.94614 4.19515 7.56762 4.01436 7.12564C3.83357 6.68365 3.78776 6.19802 3.8827 5.73003C3.97765 5.26204 4.2091 4.83266 4.54785 4.49608C4.88659 4.1595 5.31745 3.93081 5.78604 3.83887C6.25464 3.74693 6.73996 3.79586 7.18078 3.97948C7.62159 4.16311 7.99813 4.47319 8.26288 4.87061C8.52762 5.26803 8.66871 5.73497 8.66833 6.2125C8.67284 6.53221 8.61293 6.84955 8.49218 7.14561C8.37143 7.44166 8.19231 7.71038 7.9655 7.93574C7.73869 8.16111 7.46882 8.3385 7.17199 8.45734C6.87517 8.57619 6.55745 8.63406 6.23778 8.6275ZM23.8622 23.8642H19.6544V16.5589C19.6544 14.4044 18.7386 13.7394 17.5564 13.7394C16.3081 13.7394 15.0831 14.6806 15.0831 16.6133V23.8642H10.8733V10.4903H14.9217V12.3433H14.9761C15.3825 11.5208 16.8058 10.115 18.9778 10.115C21.3267 10.115 23.8642 11.5092 23.8642 15.5925L23.8622 23.8642Z"
												fill="#0A66C2" />
										</g>
										<defs>
											<clipPath id="clip0_31102_2084">
												<rect width="28" height="28" rx="2" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</a>
							</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="ci_team">
	<div class="webinar__container">
		<div class="ci_speakersDetail">
			<div class="ci_spekaerDetail_left">
				<h2>Meet the <br> Canoe team.</h2>
			</div>
			<div class="ci_spekaerDetail_right">
				<p><strong>Your partners in operational excellence.</strong> Whether you're looking to discuss the
					latest product updates or want to explore how we can better support your firm's specific goals, our
					leadership and US teams are here to connect. </p>
				<p>We'll have representatives from across the business, from AI engineering to relationship management,
					on-site and ready to chat.</p>
			</div>
		</div>
	</div>
	<!-- <div class="ci_teamImage">
		<picture>
			<source media="(max-width: 767.98px)" srcset="<?php echo $image_url . '/team_360.webp'; ?>">
			<source media="(max-width: 1023px)" srcset="<?php echo $image_url . '/team_768.webp'; ?>">
			<source media="(max-width: 1920px)" srcset="<?php echo $image_url . '/team_1440.webp'; ?>">
			<img src="<?php echo $image_url . '/team_lg.webp'; ?>" alt="Canoe Team Image">
		</picture>
	</div> -->
	<div class="webinar__container">
		<div class="ci_leadership">
			<div class="ci_leadership_list">
				<div class="ci_leadershipItem">
					<h3>Executive <br> Leadership</h3>
					<div class="ci_leadership_data">
						<a href="https://www.linkedin.com/in/jason-eiswerth-5978711/" target="_blank">Jason Eiswerth </a>
						<span>CEO</span>
					</div>
					<div class="ci_leadership_data">
						<a href="https://www.linkedin.com/in/michael-muniz-94174214/" target="_blank">Mike Muniz</a>
						<span>Partner and Chief Strategy Officer</span>
					</div>
					<div class="ci_leadership_data">
						<a href="https://www.linkedin.com/in/zack-helgeson-caia-cipm-23650637/" target="_blank">Zack Helgeson </a>
						<span>Head of Product</span>
					</div>
					<div class="ci_leadership_data">
						<a href="https://www.linkedin.com/in/christopherjohnjones/" target="_blank">Christopher Jones</a>
						<span>Chief Revenue Officer</span>
					</div>
					<div class="ci_leadership_data">
						<a href="https://www.linkedin.com/in/timothy-loughrey-/" target="_blank">Tim Loughrey</a>
						<span>Global Head of Client Experience</span>
					</div>
					<div class="ci_leadership_data">
						<a href="https://www.linkedin.com/in/betsymillerdaitch/" target="_blank">Betsy Daitch</a>
						<span>Head of Marketing</span>
					</div>
				</div>
				<div class="ci_leadershipItem">
					<h3>Account Executive <br> + Leadership</h3>
					<div class="ci_leadership_data">
						<a href="https://www.linkedin.com/in/dennismangalindan/" target="_blank">Dennis Mangalinden </a>
						<span>Senior Director of Sales</span>
					</div>
					<div class="ci_leadership_data">
						<a href="https://www.linkedin.com/in/maggiesmith182/" target="_blank">Maggie Thorson </a>
						<span>Director of Sales</span>
					</div>
					<div class="ci_leadership_data">
						<a href="https://www.linkedin.com/in/ctmclean/" target="_blank">CT McLean </a>
						<span>Director, Strategic Accounts</span>
					</div>
					<div class="ci_leadership_data">
						<a href="https://www.linkedin.com/in/connor-doran/" target="_blank">Connor Doran </a>
						<span>Account Executive </span>
					</div>
					<div class="ci_leadership_data">
						<a href="https://www.linkedin.com/in/cbearden/" target="_blank">Clayton Bearden </a>
						<span>Account Executive</span>
					</div>
					<div class="ci_leadership_data">
						<a href="https://www.linkedin.com/in/kellynuzzo/" target="_blank">Kelly Nuzzo</a>
						<span>Account Executive</span>
					</div>
					<div class="ci_leadership_data">
						<a href="https://www.linkedin.com/in/maferri/" target="_blank">Mark Ferri </a>
						<span>Director of Sales Engineering</span>
					</div>
					<div class="ci_leadership_data">
						<strong>Fred Camerzell </strong>
						<span>Sales Engineer </span>
					</div>
				</div>
				<div class="ci_leadershipItem">
					<h3>Client Success <br> & PRODUCT</h3>
					<div class="ci_leadership_data">
						<a href="https://www.linkedin.com/in/will-daly-saf" target="_blank">Will Daly </a>
						<span>Senior Director, Institutional Investors</span>
					</div>
					<div class="ci_leadership_data">
						<strong>Minoo Soleymani</strong>
						<span>Senior Relationship Manager</span>
					</div>
					<div class="ci_leadership_data">
						<a href="https://www.linkedin.com/in/emma-purcell" target="_blank">Emma Purcell </a>
						<span>Relationship Manager</span>
					</div>
					<div class="ci_leadership_data">
						<a href="https://www.linkedin.com/in/justin-cullen-jr-340342ba" target="_blank">Justin Cullen </a>
						<span>Solutions Architect</span>
					</div>
					<div class="ci_leadership_data">
						<a href="https://www.linkedin.com/in/taylor-braney" target="_blank">Taylor Braney </a>
						<span>Senior Relationship Manager</span>
					</div>
					<div class="ci_leadership_data">
						<a href="https://www.linkedin.com/in/kevin-tobiassen-aa8bb022" target="_blank">Kevin Tobiassen </a>
						<span>Senior Director, Product Management</span>
					</div>
					<div class="ci_leadership_data">
						<a href="https://www.linkedin.com/in/andrew-thomerson" target="_blank">Andrew Thomerson </a>
						<span>Senior Product Manager</span>
					</div>
					<div class="ci_leadership_data">
						<a href="https://www.linkedin.com/in/kate-wicker-24556589" target="_blank">Kate Wicker </a>
						<span>Director, Product Management</span>
					</div>
					<div class="ci_leadership_data">
						<a href="https://www.linkedin.com/in/emilymcgurrin" target="_blank">Emily McGurrin </a>
						<span>Senior Product Manager</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="spz__compass__contact">
	<div class="spz__compass__contact__container">
		<img src="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/spz_compass_caneo_logo.svg"
			alt="Canoe Logo" class="perfmatters-lazy entered pmloaded">
		<p>Optimize every step of <br> alts management.</p>
		<div class="spz__compass__contact__actions">
			<a href="mailto:compassnyc@canoeintelligence.com" class="spz__compass__contact__actions__button">Contact Us</a>
		</div>
	</div>
</section>