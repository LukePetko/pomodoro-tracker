package main

import (
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
    "github.com/wailsapp/wails/v2/pkg/options/mac"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title:  "Tomato Tracker",
		Width:  420,
		Height: 768,
        DisableResize: true,
        Fullscreen: false,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
		},
        Mac: &mac.Options{
            TitleBar:     mac.TitleBarHiddenInset(),
            About: &mac.AboutInfo{
                Title:   "Tomato Tracker",
                Message: "© 2024 Lukáš Peťko",
            },
        },
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
