import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/mobile-nav.css";
import "../styles/components/hero.css";
import "../styles/components/study.css";
import "../styles/components/about.css";
import "../styles/utils.css";

import mobileNav from "./utils/mobile-nav";
import siteAnimations from "./utils/animations";
import tabbedComponent from "./utils/tabbed-component";
import lazyLoading from "./utils/lazy-loading";
mobileNav();
siteAnimations();
tabbedComponent();
lazyLoading();
