"use client";

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { NearbyBin, Vehicle } from '@/types/user';

interface UserMapProps {
  userLocation: { lat: number; lng: number };
  bins: NearbyBin[];
  vehicles: Vehicle[];
}

export default function UserMap({ userLocation, bins, vehicles }: UserMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Initialize map
    const map = L.map(mapContainerRef.current).setView(
      [userLocation.lat, userLocation.lng],
      14
    );

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    mapRef.current = map;

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current;

    // Clear existing markers
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    // User location marker
    const userIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div class="relative">
          <div class="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
            <div class="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div class="absolute top-0 left-0 w-8 h-8 bg-blue-600 rounded-full animate-ping opacity-75"></div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    });

    L.marker([userLocation.lat, userLocation.lng], { icon: userIcon })
      .addTo(map)
      .bindPopup('<b>Your Location</b>');

    // Bin markers
    bins.forEach((bin) => {
      const color =
        bin.status === 'full' ? '#ef4444' :
          bin.status === 'half' ? '#f59e0b' :
            bin.status === 'empty' ? '#10b981' :
              '#6b7280';

      const binIcon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div class="relative">
            <div class="w-10 h-10 rounded-full border-3 border-white shadow-lg flex items-center justify-center" style="background-color: ${color}">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
            </div>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });

      L.marker([bin.coordinates.lat, bin.coordinates.lng], { icon: binIcon })
        .addTo(map)
        .bindPopup(`
          <div class="p-2">
            <h3 class="font-bold text-sm mb-1">${bin.location}</h3>
            <p class="text-xs text-gray-600 mb-1">${bin.type}</p>
            <p class="text-xs"><strong>Fill Level:</strong> ${bin.fillLevel}%</p>
            <p class="text-xs"><strong>Distance:</strong> ${bin.distance}m</p>
            <p class="text-xs"><strong>Status:</strong> <span class="capitalize">${bin.status}</span></p>
          </div>
        `);
    });

    // Vehicle markers
    vehicles.forEach((vehicle) => {
      const vehicleIcon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div class="relative">
            <div class="w-10 h-10 bg-purple-600 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>
              </svg>
            </div>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });

      L.marker([vehicle.currentLocation.lat, vehicle.currentLocation.lng], { icon: vehicleIcon })
        .addTo(map)
        .bindPopup(`
          <div class="p-2">
            <h3 class="font-bold text-sm mb-1">${vehicle.vehicleNumber}</h3>
            <p class="text-xs text-gray-600 mb-1">${vehicle.driverName}</p>
            <p class="text-xs"><strong>Status:</strong> <span class="capitalize">${vehicle.status.replace('-', ' ')}</span></p>
            <p class="text-xs"><strong>ETA:</strong> ${vehicle.eta}</p>
            <p class="text-xs"><strong>Route:</strong> ${vehicle.route.name}</p>
          </div>
        `);
    });

    // Fit bounds to show all markers
    const allPoints: L.LatLngExpression[] = [
      [userLocation.lat, userLocation.lng],
      ...bins.map(b => [b.coordinates.lat, b.coordinates.lng] as L.LatLngExpression),
      ...vehicles.map(v => [v.currentLocation.lat, v.currentLocation.lng] as L.LatLngExpression),
    ];

    if (allPoints.length > 1) {
      const bounds = L.latLngBounds(allPoints);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [userLocation, bins, vehicles]);

  return <div ref={mapContainerRef} className="w-full h-full" />;
}
