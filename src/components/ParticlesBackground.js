import React from "react";
import Particles from "react-tsparticles";
import "../assets/style.css";

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        fullScreen: {
          enable: true,
          zIndex: -9999
        },
        particles: {
          number: {
            value: 100,
            limit: 300,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          opacity: {
            value: 0,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.5,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 1,
            width: 1
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        backgroundMask: {
          enable: true,
          cover: {
            color: {
              value: {
                r: 0,
                g: 0,
                b: 0
              }
            }
          }
        },
        retina_detect: true,
        fps_limit: 60,
        background: {
          image:
            "url('https://particles.js.org/images/background3.jpg')"
        }
      }}
    />
  );
}
