import { FileVideo, Github, Upload, Wand2 } from "lucide-react";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/ui/mode-toggle";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";

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
          <aside className="w-80 space-y-6">
            <form className="space-y-6">
              <label 
                htmlFor="video" 
                className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
              >
                <FileVideo className="w-4 h-4" />
                Selecione um vídeo
              </label>
              <input className="sr-only" type="file" id="video" accept="video/mp4" />

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
                <Textarea 
                  id="transcription_prompt" 
                  className="h-80 leading-relaxed"
                  placeholder="Inclua palavras chaves mencionadas no vídeo separadas por vírgula (,)"
                />
              </div>

              <Button type="submit" className="w-full">
                Carregar vídeo
                <Upload className="w-4 h-4 ml-2" />
              </Button>
            </form>
            <Separator />
            <form className="space-y-6">
              <div className="space-y-2">
                <Label>Prompt</Label>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um prompt" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="title">
                      Título do youtube
                    </SelectItem>
                    <SelectItem value="description">
                      Descrição do youtube
                    </SelectItem>
                  </SelectContent>
                </Select>
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
