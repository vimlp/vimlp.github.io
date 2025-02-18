import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'
import github from './github.png'
import homepage_img from './homepage.jpg'

import sample1 from './audio/ViMLP/sample1.mp3'
import sample2 from './audio/ViMLP/sample2.mp3'
import sample3 from './audio/ViMLP/sample3.mp3'
import sample4 from './audio/ViMLP/sample 4.mp3'

import Sample2 from './audio/audio_stretching/sample_2.wav'
import Sample2_08 from './audio/audio_stretching/sampl_2_08.wav'
import Sample3 from './audio/additive_noise/sample_3.wav'
import Sample1 from './audio/bt4st/sample_1.wav'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon,
    github,
    homepage_img
}

export const AUDIO_PATHS = {
    vimlp: {
        sample1: sample1,
        sample2: sample2,
        sample3: sample3,
        sample4: sample4
    },
    audioStretching: {
        sample2: Sample2,
        sample2_08: Sample2_08
    },
    additiveNoise: {
        sample3: Sample3
    },
    bt4st: {
        sample1: Sample1
    }
};
