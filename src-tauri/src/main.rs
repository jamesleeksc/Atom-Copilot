// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
use tauri::Manager;
use tauri::PhysicalPosition;
use tauri::PhysicalSize;
use tauri::Size;

#[tauri::command]

fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let main_window = app.get_window("main").unwrap();
            let monitor = main_window.primary_monitor().unwrap();
            if let Some(monitor) = monitor {
                let screen_size = monitor.size();
                let width = screen_size.width * 2 / 10;
                let height = screen_size.height * 95 / 100;
                let new_position = PhysicalPosition::new(screen_size.width - width, (screen_size.height - height)/2);
                main_window
                    .set_size(Size::Physical(PhysicalSize {
                        width: width,
                        height: height,
                    }))
                    .unwrap();
                main_window.set_position(new_position).unwrap();
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
