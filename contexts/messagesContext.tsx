import { createContext, useState, ReactNode } from 'react'

type MessageContextData = {
  conversationId: number
  changeConversationId: (id: number) => void
}

export const MessageContext = createContext({} as MessageContextData)

type MessageContextProviderProps = {
  children: ReactNode
}

export function MessageContextProvider({
  children
}: MessageContextProviderProps) {
  const [conversationId, setConversationId] = useState(0)

  const changeConversationId = (id: number) => {
    setConversationId(id)
  }

  return (
    <MessageContext.Provider
      value={{
        conversationId,
        changeConversationId
      }}
    >
      {children}
    </MessageContext.Provider>
  )
}
