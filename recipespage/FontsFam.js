// import React, { useEffect, useState } from 'react';
// import * as Font from 'expo-font';

// // Function to load custom fonts
// async function loadCustomFonts() {
//     await Font.loadAsync({
//         'Inter': require('../assets/Inter/static/Inter-Light.ttf'),
//         'Inter-Bold': require('../assets/Inter/static/Inter-Bold.ttf'),
//         'Briem_Hand': require('../assets/Briem_Hand,Inter/Briem_Hand/static/BriemHand-Bold.ttf')
//     });
// }

// export default function FontsFam({ children }) {
//     const [fontsLoaded, setFontsLoaded] = useState(false);

//     useEffect(() => {
//         async function loadFonts() {
//             try {
//                 await loadCustomFonts();
//                 setFontsLoaded(true);
//             } catch (error) {
//                 console.error('Error loading fonts:', error);
//             }
//         }
//         loadFonts();
//     }, []);

//     if (!fontsLoaded) {
//         // You might want to return a loading indicator here
//         return null; 
//     }

//     return children;
// }


import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';

// Function to load custom fonts
async function loadCustomFonts() {
    try {
        await Font.loadAsync({
            'Inter': require('../assets/Inter/static/Inter-Light.ttf'),
            'Inter-Bold': require('../assets/Inter/static/Inter-Bold.ttf'),
            'Briem_Hand': require('../assets/Briem_Hand,Inter/Briem_Hand/static/BriemHand-Bold.ttf')
        });
    } catch (error) {
        console.error('Error loading fonts:', error);
        throw new Error('Failed to load fonts');
    }
}

export default function FontsFam({ children }) {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            try {
                await loadCustomFonts();
                setFontsLoaded(true);
            } catch (error) {
                // Handle the error, e.g., show an error message
            }
        }
        loadFonts();
    }, []);

    // Optionally, return a loading indicator instead of null
    if (!fontsLoaded) {
        // Return a loading indicator here
        return null;
    }

    return children;
}
