{ 
  lib,
  stdenv,
  buildNpmPackage,
  nodejs,
  gobject-introspection,
  gobject-introspection-unwrapped,
  gtk3,
  gtk4,
  wrapGAppsHook,
  gtk4-layer-shell,
  autoPatchelfHook,
  glib,
  glibc,
  python3,
  cairo,
  gjs
}:

stdenv.mkDerivation rec {
  pname = "node-gtk-test";
  version = "1";

  src = ../.;

  #src = ../.;
 installPhase = ''
    mkdir -p $out
    cp -r ./ $out 
  '';
    #dontWrapGApps = true;

  nativeBuildInputs = [
    wrapGAppsHook
    autoPatchelfHook
    gobject-introspection
    glib
  ];

  buildInputs = [
    gtk3
    gtk4
    gtk4-layer-shell
    nodejs
    #glib
    python3
    cairo
    gjs
  ];

  propagatedBuildInputs = [
    #glib
  ];

  outputs = [ "out" ];

  meta = with lib; {
    description = "A customizable and extensible shell";
    homepage = "https://example.com";
    platforms = [ "x86_64-linux" ];
    license = licenses.gpl3;
    meta.maintainers = [ ];
  };
}