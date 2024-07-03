'use client';

import React, { useRef, useState } from "react";
import { SectionWrapper } from "@/app/hooks";
import { SolarSystemCanvas } from "@/app/components/canvas";
import { slideIn, titles } from "@/app/utils";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SocialLink, Title } from "@/app/components";
import { Title as Til } from "@/app/types";
import "@/app/pages/contact/Contact.css";

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const contactTitle = titles.find(title => title.mainTitle === 'Contact')

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if (form.current) {
            emailjs
                .sendForm('service_9kp0pgm', 'template_ycvvp2m', form.current, 'caEbYirUniRIvDdgD')
                .then(
                    () => {
                        setLoading(false);
                        alert("Thank you. I will get back to you as soon as possible.");
                    },
                    (error) => {
                        setLoading(false);
                        alert("Something went wrong.");
                    },
                );
        } else {
            setLoading(false);
            alert("Form reference is not set.");
        }
    };

    return (
        <section className={'pt-8 relative'}>
            <Title title={contactTitle as Til} />
            <motion.div className={'absolute w-full h-full pl-80 pb-80 hidden md:block'}
                        variants={slideIn("down", "tween", 0.2, 1)}>
                <SolarSystemCanvas/>
            </motion.div>
            <div className={`xl:flex xl:flex-row flex-col-reverse gap-10 overflow-hidden mt-4`}>
                <motion.div
                    variants={slideIn("left", "tween", 0.2, 1)}
                    className='flex-[0.75] bg-black-100 p-4 rounded-2xl bg-contact-mesg'
                >
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className='mt-4 flex flex-col gap-5'
                    >
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Your Name</span>
                            <input
                                type='text'
                                name='name'
                                placeholder="What's your name?"
                                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                required
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Your email</span>
                            <input
                                type='email'
                                name='email'
                                placeholder="What's your email address?"
                                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                required
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Your Message</span>
                            <textarea
                                rows={7}
                                name='message'
                                placeholder='What you want to say?'
                                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                required
                            />
                        </label>

                        <button
                            type='submit'
                            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </form>
                </motion.div>

                <motion.div
                    variants={slideIn("right", "tween", 0.2, 1)}
                    className='xl:flex-1 xl:h-auto md:h-[400px] h-[300px] flex flex-col p-2'
                >
                    <div className="mb-auto">
                        <SocialLink />
                    </div>
                    <div className='flex-grow p-0'></div>
                </motion.div>
            </div>
        </section>
    );
};

export default SectionWrapper(Contact, "contact");
