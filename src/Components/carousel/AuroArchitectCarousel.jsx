import React, { useEffect, useRef, useState } from 'react';
import './AuroArchitectCarousel.css';

const vertexSource = `#version 300 es
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
in vec4 position;
void main(void) {
    gl_Position = position;
}`;

const shadersData = [
  { title: 'Sophie', source: `/* shader code for Sophie */` },
  { title: 'René', source: `/* shader code for René */` },
  { title: 'Ada', source: `/* shader code for Ada */` },
  { title: 'Doug', source: `/* shader code for Doug */` },
  { title: 'Iannis', source: `/* shader code for Iannis */` },
  { title: 'Umar', source: `/* shader code for Umar */` },
];

const ShaderCarousel = () => {
  const canvasRef = useRef(null);
  const glRef = useRef(null);
  const programsRef = useRef([]);
  const bufferRef = useRef(null);
  const runningRef = useRef(false);
  const afRef = useRef(null);
  const thenRef = useRef(0);
  const [currentShader, setCurrentShader] = useState(0);

  const compileShader = (gl, type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
    }
    return shader;
  };

  const createProgram = (gl, vertexSrc, fragmentSrc) => {
    const program = gl.createProgram();
    const vs = compileShader(gl, gl.VERTEX_SHADER, vertexSrc);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
    }
    return program;
  };

  const draw = (gl, program, time) => {
    const resolution = gl.getUniformLocation(program, 'resolution');
    const timeLoc = gl.getUniformLocation(program, 'time');

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferRef.current);
    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    gl.uniform2f(resolution, gl.canvas.width, gl.canvas.height);
    gl.uniform1f(timeLoc, time * 0.001);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
  };

  const loop = (gl, programIndex) => {
    const animate = (now) => {
      if (!runningRef.current) return;
      draw(gl, programsRef.current[programIndex], now - thenRef.current);
      afRef.current = requestAnimationFrame(animate);
    };
    afRef.current = requestAnimationFrame(animate);
  };

  const stopAnimation = () => {
    runningRef.current = false;
    if (afRef.current) cancelAnimationFrame(afRef.current);
  };

  const startAnimation = (gl, programIndex) => {
    thenRef.current = performance.now();
    runningRef.current = true;
    loop(gl, programIndex);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl2');
    glRef.current = gl;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    const vertices = new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1,
    ]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    bufferRef.current = buffer;

    const programs = shadersData.map(shader =>
      createProgram(gl, vertexSource, shader.source)
    );
    programsRef.current = programs;

    return () => stopAnimation();
  }, []);

  return (
    <main>
      <ul className="slider">
        {shadersData.map((shader, idx) => (
          <li key={idx} className="slide" style={{ backgroundImage: `url()` }}>
            <div className="visual">
              {idx === currentShader && <canvas ref={canvasRef} className="shader-canvas" />}
            </div>
            <div className="content">
              <h2 className="title">{shader.title}</h2>
              <p className="description">Shader description for {shader.title}</p>
              <button className="more ripple" onClick={() => {
                if (runningRef.current) {
                  stopAnimation();
                } else {
                  startAnimation(glRef.current, idx);
                }
                setCurrentShader(idx);
              }}>
                <div className="icon" role="button">
                  <svg viewBox="0 0 512 512">
                    <use xlinkHref={runningRef.current ? '#pause' : '#play'}></use>
                  </svg>
                </div>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <nav className='nav'>
        <div className="btn ripple prev" onClick={() => setCurrentShader((prev) => (prev - 1 + shadersData.length) % shadersData.length)}>
          <div className="icon" role="button">
            <svg viewBox="0 0 512 512">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292" />
            </svg>
          </div>
        </div>
        <div className='btn ripple next' onClick={() => setCurrentShader((prev) => (prev + 1) % shadersData.length)}>
          <div className="icon" role="button">
            <svg viewBox="0 0 512 512">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M268 112l144 144-144 144M392 256H100" />
            </svg>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default ShaderCarousel;
