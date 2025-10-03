import one from '../assets/one.webp'
import two from '../assets/two.webp'
import three from '../assets/three.webp'
import four from "../assets/four.webp"
import five from "../assets/five.webp"
import six from "../assets/six.webp"
import harsh from "../assets/harsh.webp"
import Blog1 from "../blogs/Blog1"
import Blog2 from "../blogs/Blog2"
import Blog3 from "../blogs/Blog3"
import Blog4 from "../blogs/Blog4"
import Blog5 from "../blogs/Blog5"
import Blog6 from "../blogs/Blog6"

export const blogData = [
    {
        id: 1,
        title: "How Does Krut AI Help E-commerce Brands?",
        category: "Technology",
        image: one,
        author: {
            name: "Harsh Gupta",
            avatar: harsh,
            date: "July 21, 2024",
        },
        content: <Blog1/>
    },
    {
        id: 2,
        title: "Introducing Krut AI: AI Co-Pilot For E-commerce Marketplaces",
        category: "Technology",
        image: two,
        author: {
            name: "Harsh Gupta",
            avatar: harsh,
            date: "July 21, 2024",
        },
        content: <Blog2/>,
    },

    {
        id: 3,
        title: "Craft Ads Like A Pro: AI Guides Your Human Model Creation",
        category: "Technology",
        image: three,
        author: {
            name: "Harsh Gupta",
            avatar: harsh,
            date: "July 21, 2024",
        },
        content: <Blog3/>,
    },

    {
        id: 4,
        title: "Top 5 Image Upscalers For Stunning 4k Results (in 2024)",
        category: "Technology",
        image: four,
        author: {
            name: "Harsh Gupta",
            avatar: harsh,
            date: "July 21, 2024",
        },
        content: <Blog4/>,
    },

    {
        id: 5,
        title: "Ideas to Visuals: The Art Of Al Product Photography",
        category: "Technology",
        image: five,
        author: {
            name: "Harsh Gupta",
            avatar: harsh,
            date: "July 21, 2024",
        },
        content: <Blog5/>,
    },

    {
        id: 6,
        title: "AI vs Human: Who Creates Better Art?",
        category: "Technology",
        image: six,
        author: {
            name: "Harsh Gupta",
            avatar: harsh,
            date: "July 21, 2024",
        },
        content: <Blog6/>,
    }

]

// export default blogData