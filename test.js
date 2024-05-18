#!/usr/bin/env -S gjs -m
import GtkLayerShell from 'gi://Gtk4LayerShell';
import Gtk from 'gi://Gtk?version=4.0';
import GLib from 'gi://GLib';
//import GObject from 'gi://GObject'
/**
 * 
 * run like this!!!!!!!!
 * LD_PRELOAD=/usr/lib/libgtk4-layer-shell.so gjs test.js 
 * LD_PRELOAD=/usr/lib/libgtk4-layer-shell.so gjs -m test.js 
 * 
 */
// Import necessary modules
//const GtkLayerShell = imports.gi.Gtk4LayerShell;
//imports.gi.versions.Gtk = '4.0';
//const { GLib, GObject, Gio } = imports.gi;


const loop = GLib.MainLoop.new(null, false);
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
    GtkLayerShell.set_layer(window, GtkLayerShell.Layer.TOP);
    GtkLayerShell.set_anchor(window, GtkLayerShell.Edge.BOTTOM, true); 
    GtkLayerShell.set_anchor(window, GtkLayerShell.Edge.LEFT, true); 
    GtkLayerShell.set_anchor(window, GtkLayerShell.Edge.RIGHT, true); // Anchor the window to the bottom of the screen
    GtkLayerShell.auto_exclusive_zone_enable(window)
    //GtkLayerShell.set_exclusive_zone(window, -1);

    window.show();
    window.present();
    //gi.start_loop();
    loop.run();
});
const status = app.run([]);