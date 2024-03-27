import { useState } from 'react';
import * as curlconverter from 'curlconverter';

import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';

import CopyButton from './components/CopyButton';

hljs.registerLanguage('python', python);

function App() {
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // 存放转换后的代码
    const [code, setCode] = useState('');
    // highlight.js 生成的 html
    const [highlightCode, setHighlightCode] = useState('');

    const [showCopy, setShowCopy] = useState(false);

    const handleInputValue = (value: string) => {
        if (!value) {
            setCode('');
            setInputValue('');
            setHighlightCode('');
            setErrorMessage('');
            return;
        }

        try {
            const result = curlconverter.toPython(value);

            const highlightedCode = hljs.highlight(result, {
                language: 'python',
            }).value;

            setCode(result);
            setHighlightCode(highlightedCode);
        } catch (error) {
            setHighlightCode('');
            setErrorMessage((error as { message: string }).message);
        }
        setInputValue(value);
    };

    return (
        <div className='px-4 w-screen h-screen overflow-hidden flex flex-col'>
            <div className='font-bold text-gray-900 dark:text-white text-2xl mb-4'>
                curl command
            </div>

            <textarea
                autoFocus
                name='input'
                value={inputValue}
                placeholder='curl example.com'
                className='resize-none h-2/5 min-h-10 outline-0 block w-full rounded-md border py-2 px-3 text-gray-900 border-neutral-200 dark:border-neutral-600 dark:text-neutral-100 dark:bg-neutral-800 focus:border-blue-500 dark:placeholder:text-neutral-400'
                onChange={(e) => {
                    handleInputValue(e.target.value);
                }}
            />

            <div className='my-4 dark:text-white'>
                <div>Python</div>
            </div>

            <div
                className='h-2/5 border rounded-md relative border-neutral-200 dark:border-neutral-600'
                onMouseEnter={() => {
                    if (code) {
                        setShowCopy(true);
                    }
                }}
                onMouseLeave={() => {
                    setShowCopy(false);
                }}
            >
                <pre className='absolute hljs h-full w-full p-2 rounded-md overflow-scroll break-all !bg-white dark:!bg-neutral-800'>
                    {highlightCode ? (
                        <code
                            dangerouslySetInnerHTML={{ __html: highlightCode }}
                        />
                    ) : (
                        <div className='h-full grid place-items-center dark:text-neutral-400'>
                            {errorMessage || '等待输入中...'}
                        </div>
                    )}
                </pre>

                <CopyButton visible={showCopy} value={code} />
            </div>
        </div>
    );
}

export default App;
