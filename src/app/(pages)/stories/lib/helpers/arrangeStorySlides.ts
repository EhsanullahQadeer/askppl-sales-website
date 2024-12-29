import { SlideItem } from "../../components/types";

const arrangeSlides = (slides: SlideItem[], selectedId: number): { updatedSlides: SlideItem[], centerIndex: number } => {
    const selectedIndex = slides.findIndex((slide) => slide.id === selectedId);
    if (selectedIndex === -1) return { updatedSlides: [], centerIndex :0};

    const centerIndex = Math.floor(slides.length / 2);
    const shiftOffset = selectedIndex - centerIndex;

    // Rotate the slides array based on offset (no repetition)
    let updatedSlides = [...slides];

    if (shiftOffset !== 0) {
        if (shiftOffset > 0) {
            // Move elements to the end
            updatedSlides = [
                ...updatedSlides.slice(shiftOffset), // Remaining slides after offset
                ...updatedSlides.slice(0, shiftOffset), // Slides before offset
            ];
        } else {
            // Move elements to the start
            updatedSlides = [
                ...updatedSlides.slice(updatedSlides.length + shiftOffset),
                ...updatedSlides.slice(0, updatedSlides.length + shiftOffset),
            ];
        }
    }

    return { updatedSlides, centerIndex }
};

export default arrangeSlides
