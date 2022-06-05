module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
      spacing: {
        '0': '0px',
        '0.125': '2px',
        '0.25': '4px',
        '0.5': '8px',
        '0.75': '12px',
        '1': '16px',
        '1.5': '24px',
        '2': '32px',
        '2.5': '40px',
        '3': '48px',
        '4': '64px',
        '5': '80px',
        '6': '96px',
        '6.5': '112px',
        '7': '128px',
        '8': '144px'
      },
      fontSize: {
        'euclid-10': ['10px', '130%'],
        'euclid-12': ['12px', '130%'],
        'euclid-14': ['14px', '130%'],
        'euclid-16': ['16px', '125%'],
        'euclid-20': ['20px', '115%'],
        'euclid-24': ['24px', '115%'],
        'euclid-32': ['32px', '115%']
      },
  
      screens: {
        'phone': '640px',
        'tablet': '960px',
        'laptop': '1024px',
        'desktop': '1280px'
      },
  
      borderRadius: {
        'full': '9999px'
      },
      extend: {
        fontFamily: {
          'euclid': ['Euclid Circular B']
        }
      },
  },
};

