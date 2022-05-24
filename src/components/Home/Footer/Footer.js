import React from 'react';

const Footer = () => {
    return (
        <footer class="footer p-10 bg-accent text-neutral-content">
            <div className='footer flex flex-col md:flex-row md:justify-around md:items-center'>
                <div className='mb-5 lg:mb-0'>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Manufacturing</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div className='mb-5 lg:mb-0'>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div className='mb-5 lg:mb-0'>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;