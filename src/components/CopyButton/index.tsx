import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CopyIcon, CheckIcon } from '@icons/index';

type CopyButtonType = {
    value: string;
    visible: boolean;
};

const CopyButton: React.FC<CopyButtonType> = (props) => {
    const { value, visible } = props;

    const [copying, setCopying] = useState(false);

    const handleCopy = () => {
        if (copying) {
            return;
        }

        utools.copyText(value);

        setCopying(true);

        setTimeout(() => {
            setCopying(false);
        }, 2000);
    };

    return (
        <button
            className='absolute right-2 top-2 cursor-pointer'
            onClick={handleCopy}
            aria-label='Copy'
        >
            <AnimatePresence initial={false}>
                {visible && (
                    <motion.div
                        className='rounded px-1.5 py-1.5 border border-neutral-200 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-neutral-50'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {copying ? <CheckIcon /> : <CopyIcon />}
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
};
export default CopyButton;
