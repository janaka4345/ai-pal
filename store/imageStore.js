import { create } from 'zustand'

export const useReplicateImageStore = create((set) => ({
    images: [],
    updateImages: (image) => set({ images: image }),
}))

export const useOpenaiImageStore = create((set) => ({
    images: [],
    updateImages: (image) => set({ images: image }),
}))