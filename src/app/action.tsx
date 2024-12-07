// import { NextResponse } from 'next/server'; // Import NextResponse from next/server
// import { collection, doc, getDoc, getDocs, setDoc } from "@firebase/firestore";
// import { HomepageData } from '@/store/homeStore';
// import { AboutpageData } from '@/store/aboutStore';
// import db from './firebase/firestore';

// type HomepageDataResponse = {
//     data?: HomepageData;
//     error?: string,
//     status: number
// };

// type AboutPageDataResponse = {
//     data?: AboutpageData[];
//     error?: string,
//     status: number
// };

// export async function fetchHomepageData(): Promise<HomepageDataResponse> {
//     try {
//         const docRef = doc(db, "home", "homePageData");
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//             const data = docSnap.data() as HomepageData;
//             const responseData: HomepageDataResponse = {
//                 data: {
//                     ...data,
//                     loading: false
//                 },
//                 status: 200
//             }
//             return responseData;
//         } else {
//             return new NextResponse("Document not found", { status: 404 });
//         }
//     } catch (error) {
//         console.error("Error fetching document:", error);
//         return new NextResponse("Internal Server Error", { status: 500 });
//     }
// }

// export async function updateHomepageData(data: HomepageData): Promise<HomepageDataResponse | undefined> {
//     try {
//         const docRef = doc(db, "home", "homePageData");
//         // const docSnap = await getDoc(docRef);
//         await setDoc(docRef, { ...data }).then(() => {
//             const responseData: HomepageDataResponse = {
//                 data: {
//                     ...data,
//                     loading: false
//                 },
//                 status: 201
//             }
//             return responseData;
//         }).catch(e => {
//             const responseData: HomepageDataResponse = {
//                 data: {
//                     ...data,
//                     loading: false
//                 },
//                 status: 400
//             }
//             return responseData;
//         }).finally(() => {
//             const responseData: HomepageDataResponse = {
//                 data: {
//                     ...data,
//                     loading: false
//                 },
//                 status: 400
//             }
//             return responseData;
//         })
//     } catch (error) {
//         console.error("Error fetching document:", error);
//         return new NextResponse("Internal Server Error", { status: 500 });
//     }
// }



// export async function fetchAboutpageData(): Promise<AboutPageDataResponse> {
//     try {
//         const docSnap = await getDocs(collection(db, "about"));

//         if (docSnap.docs) {
//             const data = docSnap.docs.map((doc) => ({ ...doc.data() as AboutpageData, id: doc.id }))
//             const responseData: AboutPageDataResponse = {
//                 data: data,
//                 status: 200
//             }
//             return responseData;
//         } else {
//             return new NextResponse("Document not found", { status: 404 });
//         }
//     } catch (error) {
//         console.error("Error fetching document:", error);
//         return new NextResponse("Internal Server Error", { status: 500 });
//     }
// }
