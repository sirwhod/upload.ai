import { Github, Wand2 } from "lucide-react";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/ui/mode-toggle";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";
import { VideoInputForm } from "./components/video-input-form";
import { PromptSelect } from "./components/prompt-select";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen min-h-screen flex flex-col">
        <div className="px-6 py-3 flex items-center justify-between border-b">
          <h1 className="text-xl font-bold">upload.ai</h1>
          <div className="flex items-center gap-3">
            <span className="hidden sm:flex text-sm text-muted-foreground">Desenvolvido com ❤️ no NLW da Rocketseat</span>
            <ModeToggle />
            <Separator orientation="vertical" className="h-6" />
            <Button variant="outline" asChild>
              <a href="https://github.com/sirwhod/upload.ai">
                <Github className="w-4 h-4 mr-2" />
                Github
              </a>
            </Button>
          </div>
        </div>

        <main className="flex-1 p-6 flex flex-col-reverse items-center sm:items-start sm:flex-row gap-6">
          <div className="flex flex-col flex-1 gap-4">
            <div className="grid grid-rows-2 gap-4 flex-1 min-h-[85vh]">
              <Textarea 
                className="resize-none p-4 leading-relaxed"
                placeholder="Inclua o prompt para a IA"
              />
              <Textarea 
                className="resize-none p-4 leading-relaxed"
                placeholder="Resultado gerado pela IA ..." 
                readOnly
              />
            </div>

            <p className="text-sm text-muted-foreground">
              Lembre-se: você pode utilizar a variável transcription no seu prompt para adicionar o conteúdo da <code className="text-green-400">{'{'}transcrição{'}'}</code> do vídeo selecionado.
            </p>
          </div>
          <aside className="w-full sm:w-80 space-y-6">
            
            <VideoInputForm />

            <Separator />
            <form className="space-y-6">
              <div className="space-y-2">
                <Label>Prompt</Label>

                <PromptSelect />
              </div>

              <div className="space-y-2">
                <Label>Modelo</Label>

                <Select disabled defaultValue="gpt3.5">
                  <SelectTrigger>
                    <SelectValue/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt3.5">
                      GPT 3.5-turbo 16k
                    </SelectItem>
                  </SelectContent>
                </Select>

                <span className="block text-xs text-muted-foreground italic">
                  Você poderá customizar essa opção em breve
                </span>
              </div>

              <Separator />

              <div className="space-y-4">
                <Label>Temperatura</Label>

                <Slider
                  min={0}
                  max={1}
                  step={0.1}
                />

                <span className="block text-xs text-muted-foreground italic leading-relaxed">
                  Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.
                </span>
              </div>

              <Separator />

              <Button type="submit" className="w-full">
                Executar
                <Wand2 className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </aside>
        </main>
      </div>
    </ThemeProvider>
  )
}
