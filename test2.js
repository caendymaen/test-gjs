#!/usr/bin/env -S gjs -m
import * as GtkLayerShell from 'gi://Gtk4LayerShell'
/**
 * 
 * run like this!!!!!!!!
 * LD_PRELOAD=/usr/lib/libgtk4-layer-shell.so gjs test.js 
 * 
 */
// Import necessary modules
//const GtkLayerShell = imports.gi.Gtk4LayerShell;
imports.gi.versions.Gtk = '4.0';
const { GLib, GObject, Gio, Gtk } = imports.gi;


const loop = GLib.MainLoop.new(null, false)
const test = {
    a: "a",
    b: 2
}
//gi.startLoop();

const app = new Gtk.Application({
  application_id: 'com.yourapp.example',
});

app.connect("activate", () => {
  const window = new Gtk.ApplicationWindow(app);
  window.set_title('My GTK4 Window');
  window.set_default_size(400, 300);

  const button = new Gtk.Button({ label: 'Click Me!' });
  button.connect('clicked', () => {
    console.log('Button clicked!');
  });

  window.set_child(button);

  GtkLayerShell.init_for_window(window);
  GtkLayerShell.set_layer(window, GtkLayerShell.Layer.SURFACE);
  GtkLayerShell.set_anchor(window, GtkLayerShell.Edge.BOTTOM, true); // Anchor the window to the bottom of the screen
  GtkLayerShell.set_exclusive_zone(window, -1); 


  window.show();
  window.present();
  //gi.start_loop();
  loop.run();
});
console.log("before run")
console.log(test);
console.log(JSON.stringify(test))
const status = app.run([]);
console.log("run")


