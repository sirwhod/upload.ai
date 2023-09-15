import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { api } from "@/lib/axios";

interface Prompts {
  id: string,
  title: string,
  template: string
}

interface PromptSelectProps {
  onPromptSelected: (template: string) => void
}

export function PromptSelect({onPromptSelected}: PromptSelectProps) {
  const [prompts, setPrompts] = useState<Prompts[] | null>(null)

  async function getPrompts() {
    await api.get('/prompts').then(response => {
      setPrompts(response.data)
    })
  }

  function handlePromptSelected(id: string) {
    const selectedPrompt = prompts?.find(prompt => prompt.id === id)
     
    if(!selectedPrompt) {
      return
    }


    onPromptSelected(selectedPrompt.template)
  }

  useEffect(() => {
    getPrompts()
  } ,[])

  return (
    <Select onValueChange={handlePromptSelected}>
      <SelectTrigger>
        <SelectValue placeholder="Selecione um prompt" />
      </SelectTrigger>
      <SelectContent>
          {prompts?.map((prompt) => {
            return (
              <SelectItem 
                key={prompt.id}  
                value={prompt.id}
              >
                {prompt.title}
              </SelectItem>
            )
          })}
      </SelectContent>
    </Select>
  )
}