import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { GrLinkedin, GrFacebook } from 'react-icons/gr';

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

                <div>
                    <div>
                        <p>All rights reserved &copy; {new Date().getFullYear()}</p>
                        <div className='flex items-center justify-around mt-2'>
                            <p>Visit us on</p>
                            <GrFacebook></GrFacebook>
                            <FaTwitter></FaTwitter>
                            <GrLinkedin></GrLinkedin>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;