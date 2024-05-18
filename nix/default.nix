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
  wrapGAppsHook4,
  gtk4-layer-shell,
  autoPatchelfHook,
  glib,
  glibc,
  python3,
  cairo,
  gjs,
  at-spi2-atk
}:

stdenv.mkDerivation rec {
  pname = "node-gtk-test";
  version = "1";

  src = ../.;

  #src = ../.;
    dontWrapGApps = true;

  nativeBuildInputs = [
    autoPatchelfHook
    gobject-introspection
    wrapGAppsHook
  ];

  buildInputs = [
    glib
    gtk4
    gtk4-layer-shell
    gjs
    at-spi2-atk
    python3
  ];

  propagatedBuildInputs = [
    #glib
  ];
 installPhase = ''
    mkdir -p $out
    cp -r ./ $out 
    chmod +x $out/test.js
  '';

  postFixup = ''
  wrapGApp "$out/test.js"
'';

  outputs = [ "out" ];

  meta = with lib; {
    description = "A customizable and extensible shell";
    homepage = "https://example.com";
    platforms = [ "x86_64-linux" ];
    license = licenses.gpl3;
    meta.maintainers = [ ];
  };
}