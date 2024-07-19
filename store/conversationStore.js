import { create } from 'zustand'

export const useGeminiConversationStore = create((set) => ({
    messages: [],
    updateMessages: (message) => set({ messages: message }),
}))

export const useOpenaiConversationStore = create((set) => ({
    messages: [],
    updateMessages: (message) => set({ messages: message }),
}))