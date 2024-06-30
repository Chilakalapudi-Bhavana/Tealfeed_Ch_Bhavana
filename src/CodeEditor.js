import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/themes/prism.css'; // You can choose other themes as well
import './CodeEditor.css';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (code) => {
    setCode(code);
  };

  return (
    <div className="code-editor-container">
      <div className="code-editor">
        <h1>Tealfeed Coding Playground</h1>
        <h3>Type Your Script in this CodeEditor...</h3>
        <Editor
          value={code}
          onValueChange={handleChange}
          highlight={(code) => highlight(code, languages.javascript, 'javascript')}
          padding={10}
          className="code-input"
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 16,
            minHeight: '30%',
            overflow: 'auto',
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
