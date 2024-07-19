import { create } from 'zustand'

export const useGeminiCodeStore = create((set) => ({
    messages: [],
    updateMessages: (message) => set({ messages: message }),
}))

export const useOpenaiCodeStore = create((set) => ({
    messages: [],
    updateMessages: (message) => set({ messages: message }),
}))