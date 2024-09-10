/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      colors: {
          transparent: 'transparent',
          'white': '#ffffff',
            'vista-blue': {
            '50': '#f0f9f4',
            '100': '#daf1e1',
            '200': '#b8e2c8',
            '300': '#84caa3',
            '400': '#57b081',
            '500': '#369365',
            '600': '#257650',
            '700': '#1e5e42',
            '800': '#1a4b35',
            '900': '#163e2d',
            '950': '#0b2319',
        },
      'red-ribbon': {
          '50': '#fff1f3',
          '100': '#ffdfe4',
          '200': '#ffc4cd',
          '300': '#ff9bab',
          '400': '#ff627b',
          '500': '#ff3151',
          '600': '#f1193b',
          '700': '#cb0a28',
          '800': '#a70d25',
          '900': '#8a1225',
          '950': '#4c030e',
      },
      'butterfly-bush': {
          '50': '#f9f7fd',
          '100': '#f1eef9',
          '200': '#e5dff5',
          '300': '#d1c6ec',
          '400': '#b4a1df',
          '500': '#987dcf',
          '600': '#8060bd',
          '700': '#6a4ca4',
          '800': '#634893',
          '900': '#4b366d',
          '950': '#2f1e4d',
      },
      
      },
      extend: {},
    },
    plugins: [require("tailwindcss")],
  };
  