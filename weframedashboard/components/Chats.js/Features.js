import React from 'react'
import Feature from './Feature'

const arr = [
    {
        name: 'Dashboard',
        logo: "M7 16.5H13C13.55 16.5 14 16.05 14 15.5V7.5C14 6.95 13.55 6.5 13 6.5H7C6.45 6.5 6 6.95 6 7.5V15.5C6 16.05 6.45 16.5 7 16.5ZM7 24.5H13C13.55 24.5 14 24.05 14 23.5V19.5C14 18.95 13.55 18.5 13 18.5H7C6.45 18.5 6 18.95 6 19.5V23.5C6 24.05 6.45 24.5 7 24.5ZM17 24.5H23C23.55 24.5 24 24.05 24 23.5V15.5C24 14.95 23.55 14.5 23 14.5H17C16.45 14.5 16 14.95 16 15.5V23.5C16 24.05 16.45 24.5 17 24.5ZM16 7.5V11.5C16 12.05 16.45 12.5 17 12.5H23C23.55 12.5 24 12.05 24 11.5V7.5C24 6.95 23.55 6.5 23 6.5H17C16.45 6.5 16 6.95 16 7.5Z",
    },
    {
        name: 'Notes',
        logo: "M16 12.5H6C5.45 12.5 5 12.95 5 13.5C5 14.05 5.45 14.5 6 14.5H16C16.55 14.5 17 14.05 17 13.5C17 12.95 16.55 12.5 16 12.5ZM16 8.5H6C5.45 8.5 5 8.95 5 9.5C5 10.05 5.45 10.5 6 10.5H16C16.55 10.5 17 10.05 17 9.5C17 8.95 16.55 8.5 16 8.5ZM6 18.5H12C12.55 18.5 13 18.05 13 17.5C13 16.95 12.55 16.5 12 16.5H6C5.45 16.5 5 16.95 5 17.5C5 18.05 5.45 18.5 6 18.5ZM25.21 14.71L25.3 14.8C25.69 15.19 25.69 15.82 25.3 16.21L19.72 21.8C19.33 22.19 18.7 22.19 18.31 21.8L15.22 18.71C15.0327 18.5232 14.9275 18.2695 14.9275 18.005C14.9275 17.7405 15.0327 17.4868 15.22 17.3L15.31 17.21C15.7 16.82 16.33 16.82 16.72 17.21L19.02 19.51L23.8 14.72C24.18 14.32 24.82 14.32 25.21 14.71Z",
    },
    {
        name: 'Tasks',
        logo: "M16 12.5H6C5.45 12.5 5 12.95 5 13.5C5 14.05 5.45 14.5 6 14.5H16C16.55 14.5 17 14.05 17 13.5C17 12.95 16.55 12.5 16 12.5ZM16 8.5H6C5.45 8.5 5 8.95 5 9.5C5 10.05 5.45 10.5 6 10.5H16C16.55 10.5 17 10.05 17 9.5C17 8.95 16.55 8.5 16 8.5ZM6 18.5H12C12.55 18.5 13 18.05 13 17.5C13 16.95 12.55 16.5 12 16.5H6C5.45 16.5 5 16.95 5 17.5C5 18.05 5.45 18.5 6 18.5ZM25.21 14.71L25.3 14.8C25.69 15.19 25.69 15.82 25.3 16.21L19.72 21.8C19.33 22.19 18.7 22.19 18.31 21.8L15.22 18.71C15.0327 18.5232 14.9275 18.2695 14.9275 18.005C14.9275 17.7405 15.0327 17.4868 15.22 17.3L15.31 17.21C15.7 16.82 16.33 16.82 16.72 17.21L19.02 19.51L23.8 14.72C24.18 14.32 24.82 14.32 25.21 14.71Z",
    },
    {
        name: 'Files',
        logo: "M22.35 13.54C21.67 10.09 18.64 7.5 15 7.5C12.11 7.5 9.6 9.14 8.35 11.54C5.34 11.86 3 14.41 3 17.5C3 20.81 5.69 23.5 9 23.5H22C24.76 23.5 27 21.26 27 18.5C27 15.86 24.95 13.72 22.35 13.54Z",
    },
    {
        name: 'Emails',
        logo: "M23 7.5H7C5.9 7.5 5.01 8.4 5.01 9.5L5 21.5C5 22.6 5.9 23.5 7 23.5H23C24.1 23.5 25 22.6 25 21.5V9.5C25 8.4 24.1 7.5 23 7.5ZM22.6 11.75L15.53 16.17C15.21 16.37 14.79 16.37 14.47 16.17L7.4 11.75C7.15 11.59 7 11.32 7 11.03C7 10.36 7.73 9.96 8.3 10.31L15 14.5L21.7 10.31C22.27 9.96 23 10.36 23 11.03C23 11.32 22.85 11.59 22.6 11.75Z",
    },
    {
        name: 'Clients',
        logo: "M19 14.5C20.66 14.5 21.99 13.16 21.99 11.5C21.99 9.84 20.66 8.5 19 8.5C17.34 8.5 16 9.84 16 11.5C16 13.16 17.34 14.5 19 14.5ZM11 14.5C12.66 14.5 13.99 13.16 13.99 11.5C13.99 9.84 12.66 8.5 11 8.5C9.34 8.5 8 9.84 8 11.5C8 13.16 9.34 14.5 11 14.5ZM11 16.5C8.67 16.5 4 17.67 4 20V21.5C4 22.05 4.45 22.5 5 22.5H17C17.55 22.5 18 22.05 18 21.5V20C18 17.67 13.33 16.5 11 16.5ZM19 16.5C18.71 16.5 18.38 16.52 18.03 16.55C18.05 16.56 18.06 16.58 18.07 16.59C19.21 17.42 20 18.53 20 20V21.5C20 21.85 19.93 22.19 19.82 22.5H25C25.55 22.5 26 22.05 26 21.5V20C26 17.67 21.33 16.5 19 16.5Z",
    },
    {
        name: 'Calendars',
        logo: "M19 16.5H16C15.45 16.5 15 16.95 15 17.5V20.5C15 21.05 15.45 21.5 16 21.5H19C19.55 21.5 20 21.05 20 20.5V17.5C20 16.95 19.55 16.5 19 16.5ZM19 6.5V7.5H11V6.5C11 5.95 10.55 5.5 10 5.5C9.45 5.5 9 5.95 9 6.5V7.5H8C6.89 7.5 6.01 8.4 6.01 9.5L6 23.5C6 24.6 6.89 25.5 8 25.5H22C23.1 25.5 24 24.6 24 23.5V9.5C24 8.4 23.1 7.5 22 7.5H21V6.5C21 5.95 20.55 5.5 20 5.5C19.45 5.5 19 5.95 19 6.5ZM21 23.5H9C8.45 23.5 8 23.05 8 22.5V12.5H22V22.5C22 23.05 21.55 23.5 21 23.5Z",
    },
    {
        name: 'Settings',
        logo: "M15.0888 6.39628C13.0788 4.38628 10.0688 3.97628 7.64878 5.15628L11.2788 8.78628C11.6688 9.17628 11.6688 9.80628 11.2788 10.1963L9.68878 11.7863C9.29878 12.1863 8.66878 12.1863 8.27878 11.7863L4.64878 8.15628C3.47878 10.5863 3.88878 13.5763 5.89878 15.5863C7.75878 17.4463 10.4788 17.9363 12.7888 17.0663L20.7488 25.0263C21.7788 26.0563 23.4388 26.0563 24.4588 25.0263C25.4888 23.9963 25.4888 22.3363 24.4588 21.3163L16.5388 13.3863C17.4588 11.0463 16.9788 8.28628 15.0888 6.39628Z",
    },
];

const Features = () => {
    return (
        <table className="border-collapse border-2 border-slate-200  ">

            <tbody>
                <tr>
                    <td className="border border-slate-300 text-gray-400 font-semibold hover:font-bold hover:text-blue-600 hover:fill-blue-600  hover:scale-125 hover:z-10 ">
                        <Feature key={arr[0].name} txt={arr[0].name} img={arr[0].logo} />
                    </td>
                    <td className="border border-slate-300 text-gray-400 font-semibold hover:font-bold hover:text-blue-600 hover:fill-blue-600  hover:scale-125 hover:z-10 ">
                        <Feature key={arr[1].name} txt={arr[1].name} img={arr[1].logo} />
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-300 text-gray-400 font-semibold hover:font-bold hover:text-blue-600 hover:fill-blue-600  hover:scale-125 hover:z-10 ">
                        <Feature key={arr[2].name} txt={arr[2].name} img={arr[2].logo} />
                    </td>
                    <td className="border border-slate-300 text-gray-400 font-semibold hover:font-bold hover:text-blue-600 hover:fill-blue-600  hover:scale-125 hover:z-10 ">
                        <Feature key={arr[3].name} txt={arr[3].name} img={arr[3].logo} />
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-300 text-gray-400 font-semibold hover:font-bold hover:text-blue-600 hover:fill-blue-600  hover:scale-125 hover:z-10 ">
                        <Feature key={arr[4].name} txt={arr[4].name} img={arr[4].logo} />
                    </td>
                    <td className="border border-slate-300 text-gray-400 font-semibold hover:font-bold hover:text-blue-600 hover:fill-blue-600  hover:scale-125 hover:z-10 ">
                        <Feature key={arr[5].name} txt={arr[5].name} img={arr[5].logo} />
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-300 text-gray-400 font-semibold hover:font-bold hover:text-blue-600 hover:fill-blue-600  hover:scale-125 hover:z-10 ">
                        <Feature key={arr[6].name} txt={arr[6].name} img={arr[6].logo} />
                    </td>
                    <td className="border border-slate-300 text-gray-400 font-semibold hover:font-bold hover:text-blue-600 hover:fill-blue-600  hover:scale-125 hover:z-10 ">
                        <Feature key={arr[7].name} txt={arr[7].name} img={arr[7].logo} />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Features