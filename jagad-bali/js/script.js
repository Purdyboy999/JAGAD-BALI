document.addEventListener('DOMContentLoaded', () => {

    // ─── 1. DATABASE MATERIAL BANGUNAN (UD JAGAD BALI) ─────────────────────────
    const PRODUCTS = [
        // ── KATEGORI: PLAFON ──
        {
            id: "gypsum-jayaboard",
            name: "Papan Gypsum Jayaboard 9mm",
            category: "plafon",
            unit: "lembar",
            price: 85000,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop",
            badge: "Brand Utama",
            description: "Papan gypsum kualitas premium Jayaboard 9mm. Kuat, rata, dan tahan lendut. Sangat cocok untuk plafon interior mewah.",
            specs: ["Tebal: 9mm", "Ukuran: 1.2m x 2.4m", "Berat: 15 Kg"]
        },
        {
            id: "gypsum-elephant",
            name: "Papan Gypsum Elephant 9mm",
            category: "plafon",
            unit: "lembar",
            price: 72000,
            image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop",
            badge: "Ekonomis",
            description: "Papan gypsum Elephant 9mm. Solusi ekonomis dengan kualitas terjamin. Permukaan halus siap cat.",
            specs: ["Tebal: 9mm", "Ukuran: 1.2m x 2.4m", "Berat: 14.5 Kg"]
        },
        {
            id: "grc-board-4",
            name: "GRC Board Flat 4mm",
            category: "plafon",
            unit: "lembar",
            price: 65000,
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop",
            badge: "Tahan Air",
            description: "Papan fiber semen GRC Board 4mm. Tahan air, tahan rayap, cocok untuk plafon teras luar ruangan atau kamar mandi.",
            specs: ["Tebal: 4mm", "Ukuran: 1.2m x 2.4m", "Bahan: Semen Silika"]
        },
        {
            id: "hollow-2x4",
            name: "Hollow Zincalume 2x4",
            category: "plafon",
            unit: "batang",
            price: 22000,
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400&auto=format&fit=crop",
            badge: "Rangka Plafon",
            description: "Besi hollow zincalume ukuran 2x4 anti karat untuk rangka gantungan plafon gypsum dan PVC.",
            specs: ["Tebal: 0.3mm", "Panjang: 4 meter", "Bahan: Galvalum"]
        },
        {
            id: "hollow-4x4",
            name: "Hollow Zincalume 4x4",
            category: "plafon",
            unit: "batang",
            price: 28000,
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400&auto=format&fit=crop",
            badge: "Rangka Plafon",
            description: "Besi hollow zincalume ukuran 4x4 anti karat untuk rangka utama penahan beban plafon.",
            specs: ["Tebal: 0.3mm", "Panjang: 4 meter", "Bahan: Galvalum"]
        },

        // ── KATEGORI: PVC ──
        {
            id: "pvc-golden-wood",
            name: "Plafon PVC Golden Wood Series",
            category: "pvc",
            unit: "lembar",
            price: 45000,
            image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=400&auto=format&fit=crop",
            badge: "Best Seller",
            description: "Plafon PVC premium motif serat kayu jati alami. Memberikan nuansa hangat, mewah, tanpa perlu finishing cat.",
            specs: ["Tebal: 8mm", "Lebar: 20cm", "Panjang: 4m (0.8m²)"]
        },
        {
            id: "pvc-shunda-white",
            name: "Shunda Plafon Glossy White",
            category: "pvc",
            unit: "lembar",
            price: 68000,
            image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=400&auto=format&fit=crop",
            badge: "Shunda Asli",
            description: "Plafon PVC Shunda Plafon warna putih kilap (glossy) bersih. Anti air, tidak merambat api, dan sangat ringan.",
            specs: ["Tebal: 8mm", "Lebar: 20cm", "Panjang: 4m (0.8m²)"]
        },
        {
            id: "pvc-wallboard-3d",
            name: "PVC Wallboard Panel Dinding",
            category: "pvc",
            unit: "lembar",
            price: 95000,
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400&auto=format&fit=crop",
            badge: "Dekorasi",
            description: "Panel wallboard PVC untuk pelapis dinding interior. Motif marmer / wood panel mewah untuk ruang tamu & kamar.",
            specs: ["Tebal: 9mm", "Lebar: 40cm", "Panjang: 3m (1.2m²)"]
        },
        {
            id: "pvc-list-siku",
            name: "List PVC Profile Siku",
            category: "pvc",
            unit: "batang",
            price: 35000,
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=400&auto=format&fit=crop",
            badge: "Aksesoris",
            description: "List siku PVC penutup sudut sambungan plafon atau dinding agar terlihat rapi dan elegan.",
            specs: ["Lebar: 3cm x 3cm", "Panjang: 4m", "Warna: Senada Plafon"]
        },

        // ── KATEGORI: RANGKA ATAP / BAJA RINGAN ──
        {
            id: "truss-taso-75",
            name: "Baja Ringan C75 TASO 0.75mm",
            category: "atap",
            unit: "batang",
            price: 95000,
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400&auto=format&fit=crop",
            badge: "Taso Original",
            description: "Baja ringan C75 TASO tebal 0.75mm. Kualitas SNI berlapis Galvalum tinggi, sangat kokoh untuk struktur rangka atap rumah.",
            specs: ["Tebal: 0.75mm", "Panjang: 6 meter", "Bahan: High Tensile G550"]
        },
        {
            id: "truss-kencana-75",
            name: "Baja Ringan C75 Kencana 0.75mm",
            category: "atap",
            unit: "batang",
            price: 88000,
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400&auto=format&fit=crop",
            badge: "SNI Tebal",
            description: "Baja ringan C-Truss Kencana 0.75mm. Kuat, presisi, bersertifikat SNI resmi untuk rangka atap baja ringan tepercaya.",
            specs: ["Tebal: 0.75mm", "Panjang: 6 meter", "Bahan: Galvalum"]
        },
        {
            id: "reng-taso-45",
            name: "Reng Baja Ringan TASO 0.45mm",
            category: "atap",
            unit: "batang",
            price: 48000,
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400&auto=format&fit=crop",
            badge: "Aksesoris Atap",
            description: "Reng TASO tebal 0.45mm untuk tatakan genteng metal, spandek, atau genteng beton di atas baja ringan.",
            specs: ["Tebal: 0.45mm", "Panjang: 6 meter", "Bahan: Galvalum"]
        },
        {
            id: "spandek-pasir-30",
            name: "Atap Spandek Pasir 0.30mm",
            category: "atap",
            unit: "lembar",
            price: 62000,
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&auto=format&fit=crop",
            badge: "Atap Redam",
            description: "Atap spandek logam berlapis pasir meredam suara bising air hujan dan mengurangi hawa panas terik matahari.",
            specs: ["Tebal: 0.30mm", "Lebar: 1 meter Efektif", "Panjang: Per meter"]
        },
        {
            id: "genteng-metal-pasir",
            name: "Genteng Metal Pasir 2x4",
            category: "atap",
            unit: "lembar",
            price: 35000,
            image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop",
            badge: "Klasik Mewah",
            description: "Genteng metal flat berperekat pasir. Ringan, anti bocor, mempercantik estetika atap bangunan modern.",
            specs: ["Ukuran: 80cm x 80cm", "Tipe: 2x4 Daun", "Bahan: Zincalume Pasir"]
        },

        // ── KATEGORI: PARTISI ──
        {
            id: "metal-stud-76",
            name: "Metal Stud Rangka Partisi 76mm",
            category: "partisi",
            unit: "batang",
            price: 45000,
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400&auto=format&fit=crop",
            badge: "Rangka Partisi",
            description: "Besi hollow stud vertikal ukuran 76mm untuk dudukan sekrup papan gypsum penyekat ruangan (partisi).",
            specs: ["Lebar: 76mm", "Panjang: 3 meter", "Tebal: 0.35mm"]
        },
        {
            id: "metal-track-76",
            name: "Metal Track Rangka Partisi 76mm",
            category: "partisi",
            unit: "batang",
            price: 42000,
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400&auto=format&fit=crop",
            badge: "Rangka Partisi",
            description: "Besi U-Track horizontal penahan stud partisi atas dan bawah untuk penyekat ruangan.",
            specs: ["Lebar: 76mm", "Panjang: 3 meter", "Tebal: 0.35mm"]
        }
    ];

    // WhatsApp Admin Number
    const WA_NUMBER = "628170071115";

    // ─── 2. STATE BELANJA (LOCALSTORAGE CART) ─────────────────────────────────
    let cart = [];
    try {
        const storedCart = localStorage.getItem('jagad_bali_cart');
        if (storedCart) cart = JSON.parse(storedCart);
    } catch (e) {
        console.error('Gagal memuat keranjang:', e);
    }

    // Save Cart to LocalStorage
    const saveCart = () => {
        try {
            localStorage.setItem('jagad_bali_cart', JSON.stringify(cart));
        } catch (e) {
            console.error('Gagal menyimpan keranjang:', e);
        }
        updateCartBadge();
    };

    // Update Cart Badge Count
    const updateCartBadge = () => {
        const countEl = document.getElementById('cart-count');
        if (countEl) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            countEl.textContent = totalItems;
        }
    };

    // Helper Rupiah Formatter
    const formatRupiah = (value) => {
        return "Rp " + value.toLocaleString('id-ID');
    };

    // ─── 3. INTERAKSI DRAWER KERANJANG ───────────────────────────────────────
    const cartBtn = document.getElementById('cart-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const shopNowBtn = document.getElementById('shop-now-btn');

    const openCart = () => {
        if (cartDrawer && cartOverlay) {
            cartDrawer.classList.remove('translate-x-full');
            cartDrawer.classList.add('translate-x-0');
            cartOverlay.classList.remove('hidden');
            renderCart();
        }
    };

    const closeCart = () => {
        if (cartDrawer && cartOverlay) {
            cartDrawer.classList.add('translate-x-full');
            cartDrawer.classList.remove('translate-x-0');
            cartOverlay.classList.add('hidden');
        }
    };

    if (cartBtn) cartBtn.addEventListener('click', openCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
    if (shopNowBtn) shopNowBtn.addEventListener('click', closeCart);

    // Add item to cart
    window.addToCart = (productId, quantity, isServiceIncluded = false, customDesc = "") => {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        const cartItemId = `${productId}-${isServiceIncluded ? 'jasa' : 'bahan'}-${customDesc.replace(/\s+/g, '-').toLowerCase()}`;
        const existingItem = cart.find(item => item.cartItemId === cartItemId);

        let finalPrice = product.price;
        let finalName = product.name;

        if (isServiceIncluded) {
            finalName += " + Jasa Pasang";
            // Hitung tambahan harga jasa pasang per unit jika ditambahkan lewat simulasi
            if (product.category === 'plafon') finalPrice += 150000;
            else if (product.category === 'pvc') finalPrice += 160000;
            else if (product.category === 'atap') finalPrice += 220000;
            else if (product.category === 'partisi') finalPrice += 180000;
        }

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                cartItemId: cartItemId,
                id: product.id,
                name: finalName,
                pricePerUnit: finalPrice,
                unit: product.unit,
                description: customDesc || "Pembelian Material",
                quantity: quantity
            });
        }

        saveCart();
        openCart();
    };

    window.updateCartQty = (cartItemId, newQty) => {
        const item = cart.find(item => item.cartItemId === cartItemId);
        if (item) {
            item.quantity = Math.max(1, newQty);
            saveCart();
            renderCart();
        }
    };

    window.removeFromCart = (cartItemId) => {
        cart = cart.filter(item => item.cartItemId !== cartItemId);
        saveCart();
        renderCart();
    };

    // Render Cart HTML inside drawer
    const renderCart = () => {
        const container = document.getElementById('cart-items-container');
        const footer = document.getElementById('cart-footer');
        const emptyState = document.getElementById('empty-cart-state');
        const subtotalEl = document.getElementById('cart-subtotal');

        if (!container) return;

        container.innerHTML = '';

        if (cart.length === 0) {
            container.appendChild(emptyState);
            emptyState.classList.remove('hidden');
            if (footer) footer.classList.add('hidden');
            return;
        }

        emptyState.classList.add('hidden');
        if (footer) footer.classList.remove('hidden');

        let subtotal = 0;

        cart.forEach(item => {
            const itemSubtotal = item.pricePerUnit * item.quantity;
            subtotal += itemSubtotal;

            const itemHtml = `
                <div class="flex items-start justify-between p-3 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200/80 dark:border-neutral-800 gap-3">
                    <div class="flex-grow">
                        <span class="font-extrabold text-neutral-900 dark:text-white text-xs block leading-tight">${item.name}</span>
                        <span class="text-neutral-500 dark:text-neutral-400 text-[10px] block mt-0.5">${item.description}</span>
                        <span class="font-bold text-brand-600 dark:text-brand-500 text-xs mt-1 block">${formatRupiah(itemSubtotal)}</span>
                    </div>
                    
                    <div class="flex flex-col items-end gap-2 shrink-0">
                        <div class="flex items-center border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 overflow-hidden">
                            <button onclick="updateCartQty('${item.cartItemId}', ${item.quantity - 1})" class="px-1.5 py-0.5 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs font-bold">-</button>
                            <span class="px-2 text-xs font-bold text-neutral-950 dark:text-white">${item.quantity}</span>
                            <button onclick="updateCartQty('${item.cartItemId}', ${item.quantity + 1})" class="px-1.5 py-0.5 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs font-bold">+</button>
                        </div>
                        
                        <button onclick="removeFromCart('${item.cartItemId}')" class="text-neutral-400 hover:text-red-600 transition-colors text-base p-1">
                            <i class="ph ph-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', itemHtml);
        });

        if (subtotalEl) {
            subtotalEl.textContent = formatRupiah(subtotal);
        }
    };

    // Checkout Cart to WhatsApp
    const checkoutBtn = document.getElementById('whatsapp-checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) return;

            let message = "*Halo UD Jagad Bali, Saya ingin memesan material & jasa pasang berikut:*\n\n";
            let subtotal = 0;

            cart.forEach((item, index) => {
                const itemSubtotal = item.pricePerUnit * item.quantity;
                subtotal += itemSubtotal;
                message += `${index + 1}. *${item.name}*\n   - Keterangan: ${item.description}\n   - Jumlah: ${item.quantity} ${item.unit || 'pcs'}\n   - Subtotal: ${formatRupiah(itemSubtotal)}\n\n`;
            });

            message += `-------------------------\n*Total Estimasi Pesanan: ${formatRupiah(subtotal)}*\n\nMohon informasi ongkir dan ketersediaan teknisi pasang ke alamat saya. Terima kasih!`;

            const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
            window.open(waUrl, '_blank');
        });
    }

    // ─── 4. DYNAMIC CATALOGUE RENDERING (SEARCH & FILTERS) ───────────────────
    const productGrid = document.getElementById('product-grid');
    const searchInput = document.getElementById('search-input');
    const categoryTabs = document.querySelectorAll('.category-tab');

    let currentCategory = 'all';
    let searchQuery = '';

    const renderCatalog = () => {
        if (!productGrid) return;

        productGrid.innerHTML = '';

        // Filter products
        const filtered = PRODUCTS.filter(p => {
            const matchCategory = currentCategory === 'all' || p.category === currentCategory;
            const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                p.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchCategory && matchSearch;
        });

        if (filtered.length === 0) {
            productGrid.innerHTML = `
                <div class="col-span-full flex flex-col items-center justify-center py-20 text-neutral-400 dark:text-neutral-500 space-y-3">
                    <i class="ph ph-warning-circle text-5xl"></i>
                    <p class="text-sm">Tidak ada produk material yang cocok dengan pencarian Anda.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(p => {
            const specsHtml = p.specs ? p.specs.map(spec => `
                <span class="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-300 text-[10px] font-bold px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-700">${spec}</span>
            `).join('') : '';

            const cardHtml = `
                <div class="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-soft border border-neutral-200 dark:border-neutral-800 hover:border-brand-500/40 dark:hover:border-brand-500/40 transition-all duration-300 group flex flex-col justify-between">
                    <div>
                        <div class="relative h-48 w-full bg-neutral-100 dark:bg-neutral-950 overflow-hidden">
                            <img src="${p.image}" alt="${p.name}"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                onerror="this.src='https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop'">
                            ${p.badge ? `<span class="absolute top-4 left-4 bg-neutral-950 text-brand-500 border border-brand-500/30 text-[10px] font-extrabold tracking-wider px-3 py-1 rounded-full uppercase shadow-md">${p.badge}</span>` : ''}
                        </div>
                        
                        <div class="p-5">
                            <span class="text-[10px] text-brand-600 dark:text-brand-500 font-extrabold uppercase tracking-wider block mb-1.5">${p.category.toUpperCase()}</span>
                            <h4 class="font-extrabold text-neutral-900 dark:text-white text-sm leading-snug mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">${p.name}</h4>
                            <p class="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-2 leading-relaxed mb-4">${p.description}</p>
                            
                            <div class="flex flex-wrap gap-1.5 mb-4">
                                ${specsHtml}
                            </div>
                        </div>
                    </div>

                    <div class="px-5 pb-5 pt-3 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/20">
                        <div class="flex items-baseline justify-between mb-4">
                            <div class="text-neutral-900 dark:text-white font-black text-base">
                                <span>${formatRupiah(p.price)}</span> 
                                <span class="text-[10px] text-neutral-400 font-normal">/ ${p.unit}</span>
                            </div>
                        </div>

                        <div class="grid grid-cols-12 gap-2">
                            <div class="col-span-4 flex items-center border border-neutral-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-800 overflow-hidden">
                                <button onclick="decrementQty('qty-${p.id}')" class="w-full h-full hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 font-bold text-xs">-</button>
                                <input type="number" id="qty-${p.id}" value="1" min="1" class="w-8 text-center text-xs font-bold text-neutral-950 dark:text-white bg-transparent outline-none border-none pointer-events-none">
                                <button onclick="incrementQty('qty-${p.id}')" class="w-full h-full hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 font-bold text-xs">+</button>
                            </div>

                            <button onclick="window.addCatalogToCart('${p.id}')"
                                class="col-span-6 bg-brand-600 hover:bg-brand-700 text-white font-bold py-2.5 rounded-xl text-xs tracking-wide transition-all flex items-center justify-center gap-1.5 shadow-sm shadow-brand-500/20">
                                <i class="ph ph-shopping-cart text-sm"></i>
                                + Keranjang
                            </button>

                            <a href="https://wa.me/${WA_NUMBER}?text=Halo%20Admin%20UD%20Jagad%20Bali,%20saya%20tertarik%20dengan%20produk%20*${encodeURIComponent(p.name)}*" target="_blank"
                                class="col-span-2 border border-neutral-200 dark:border-neutral-700 hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-950/20 text-neutral-700 dark:text-neutral-300 rounded-xl flex items-center justify-center transition-colors">
                                <i class="ph-fill ph-whatsapp-logo text-lg text-green-500"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;
            productGrid.insertAdjacentHTML('beforeend', cardHtml);
        });
    };

    window.addCatalogToCart = (productId) => {
        const qtyEl = document.getElementById(`qty-${productId}`);
        const quantity = qtyEl ? parseInt(qtyEl.value) || 1 : 1;
        window.addToCart(productId, quantity, false, "Pembelian Material");
        if (qtyEl) qtyEl.value = 1;
    };

    window.incrementQty = (inputId) => {
        const input = document.getElementById(inputId);
        if (input) input.value = parseInt(input.value) + 1;
    };

    window.decrementQty = (inputId) => {
        const input = document.getElementById(inputId);
        if (input && parseInt(input.value) > 1) input.value = parseInt(input.value) - 1;
    };

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderCatalog();
        });
    }

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            categoryTabs.forEach(t => {
                t.classList.remove('active', 'bg-brand-600', 'text-white');
                t.classList.add('bg-white', 'dark:bg-neutral-800', 'text-neutral-600', 'dark:text-neutral-300');
            });
            tab.classList.add('active', 'bg-brand-600', 'text-white');
            tab.classList.remove('bg-white', 'dark:bg-neutral-800', 'text-neutral-600', 'dark:text-neutral-300');

            currentCategory = tab.getAttribute('data-category');
            renderCatalog();
        });
    });

    // ─── 5. SIMULASI DETAILED PRICE LIST ─────────────────────────────────────
    const priceTableBody = document.getElementById('price-table-body');
    const priceCategoryFilter = document.getElementById('price-category-filter');

    const renderPriceTable = (categoryFilter = 'all') => {
        if (!priceTableBody) return;

        priceTableBody.innerHTML = '';

        const filtered = PRODUCTS.filter(p => categoryFilter === 'all' || p.category === categoryFilter);

        filtered.forEach(p => {
            const categoryLabel = {
                'plafon': 'Plafon Gypsum & GRC',
                'pvc': 'Plafon & Dinding PVC',
                'atap': 'Baja Ringan & Genteng',
                'partisi': 'Rangka & Papan Partisi'
            }[p.category] || p.category;

            const rowHtml = `
                <tr class="hover:bg-neutral-50/80 dark:hover:bg-neutral-800/40 border-b border-neutral-100 dark:border-neutral-800 transition-colors text-xs md:text-sm">
                    <td class="px-6 py-4 font-bold text-neutral-900 dark:text-white">
                        ${p.name}
                        <p class="text-[10px] text-neutral-400 font-normal mt-0.5">${p.specs.join(', ')}</p>
                    </td>
                    <td class="px-6 py-4">
                        <span class="inline-block py-0.5 px-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-[10px] font-bold uppercase tracking-wider">${categoryLabel}</span>
                    </td>
                    <td class="px-6 py-4 text-xs font-semibold text-neutral-400 dark:text-neutral-500">${p.unit}</td>
                    <td class="px-6 py-4 text-right font-extrabold text-brand-600 dark:text-brand-500">${formatRupiah(p.price)}</td>
                    <td class="px-6 py-4 text-center">
                        <button onclick="window.addToCart('${p.id}', 1, false, 'Pembelian Material')" class="px-3 py-1.5 bg-neutral-950 hover:bg-brand-600 text-white rounded-lg transition-colors text-xs font-bold flex items-center gap-1 mx-auto">
                            <i class="ph ph-shopping-cart"></i> + Order
                        </button>
                    </td>
                </tr>
            `;
            priceTableBody.insertAdjacentHTML('beforeend', rowHtml);
        });
    };

    if (priceCategoryFilter) {
        priceCategoryFilter.addEventListener('change', (e) => {
            renderPriceTable(e.target.value);
        });
    }

    // ─── 6. STANDALONE/SUBPAGE CALCULATORS ───────────────────────────────────

    // A. KALKULATOR PLAFON
    window.calculatePlafon = () => {
        const length = parseFloat(document.getElementById('plafon-length').value) || 0;
        const width = parseFloat(document.getElementById('plafon-width').value) || 0;
        const type = document.getElementById('plafon-type').value; // gypsum-jayaboard atau pvc-golden-wood

        if (length <= 0 || width <= 0) return;

        const area = length * width;
        let boardNeeded = 0;
        let hollow4x4 = 0;
        let hollow2x4 = 0;
        let materialCost = 0;

        // Pilih bahan utama
        const boardProduct = PRODUCTS.find(p => p.id === type);
        const h4 = PRODUCTS.find(p => p.id === 'hollow-4x4');
        const h2 = PRODUCTS.find(p => p.id === 'hollow-2x4');

        if (type.includes('pvc')) {
            // PVC ukuran 0.2m x 4m = 0.8 m²
            boardNeeded = Math.ceil(area / 0.8);
        } else {
            // Gypsum ukuran 1.2m x 2.4m = 2.88 m²
            boardNeeded = Math.ceil(area / 2.88);
        }

        // Hitung kebutuhan hollow (4 meter per batang)
        hollow4x4 = Math.ceil((length * (width/0.6 + 1) + width * (length/0.6 + 1)) / 4);
        hollow2x4 = Math.ceil(hollow4x4 * 0.5);

        materialCost = (boardNeeded * boardProduct.price) + (hollow4x4 * h4.price) + (hollow2x4 * h2.price);

        // Display results
        document.getElementById('plafon-res-area').textContent = `${area.toFixed(2)} m²`;
        document.getElementById('plafon-res-board').textContent = `${boardNeeded} Lembar`;
        document.getElementById('plafon-res-h4').textContent = `${hollow4x4} Batang`;
        document.getElementById('plafon-res-h2').textContent = `${hollow2x4} Batang`;
        document.getElementById('plafon-res-cost').textContent = formatRupiah(materialCost);

        // Set action button
        const addBtn = document.getElementById('plafon-add-cart');
        if (addBtn) {
            addBtn.onclick = () => {
                window.addToCart(boardProduct.id, boardNeeded, false, `Simulasi Plafon: Luas ${area.toFixed(1)}m²`);
                window.addToCart(h4.id, hollow4x4, false, `Simulasi Plafon: Rangka Hollow Utama`);
                window.addToCart(h2.id, hollow2x4, false, `Simulasi Plafon: Rangka Hollow Gantungan`);
            };
            addBtn.disabled = false;
            addBtn.classList.remove('opacity-50');
        }
    };

    // B. KALKULATOR PVC
    window.calculatePVC = () => {
        const length = parseFloat(document.getElementById('pvc-length').value) || 0;
        const width = parseFloat(document.getElementById('pvc-width').value) || 0;
        const design = document.getElementById('pvc-design').value; // pvc-golden-wood atau pvc-shunda-white

        if (length <= 0 || width <= 0) return;

        const area = length * width;
        const pvcProduct = PRODUCTS.find(p => p.id === design);
        const listProduct = PRODUCTS.find(p => p.id === 'pvc-list-siku');

        // PVC Panel size = 0.2m x 4m = 0.8 m²
        const panels = Math.ceil(area / 0.8);
        // List siku PVC keliling ruangan (4 meter per batang)
        const listSiku = Math.ceil((length * 2 + width * 2) / 4);

        const totalCost = (panels * pvcProduct.price) + (listSiku * listProduct.price);

        document.getElementById('pvc-res-area').textContent = `${area.toFixed(2)} m²`;
        document.getElementById('pvc-res-panels').textContent = `${panels} Lembar`;
        document.getElementById('pvc-res-lists').textContent = `${listSiku} Batang`;
        document.getElementById('pvc-res-cost').textContent = formatRupiah(totalCost);

        const addBtn = document.getElementById('pvc-add-cart');
        if (addBtn) {
            addBtn.onclick = () => {
                window.addToCart(pvcProduct.id, panels, false, `Simulasi PVC: Luas ${area.toFixed(1)}m²`);
                window.addToCart(listProduct.id, listSiku, false, `Simulasi PVC: List Siku Keliling`);
            };
            addBtn.disabled = false;
            addBtn.classList.remove('opacity-50');
        }
    };

    // C. KALKULATOR RANGKA ATAP / BAJA RINGAN
    window.calculateAtap = () => {
        const areaAlas = parseFloat(document.getElementById('atap-area').value) || 0;
        const slope = parseFloat(document.getElementById('atap-slope').value) || 30; // kemiringan derajat
        const overstek = parseFloat(document.getElementById('atap-overstek').value) || 1.0;
        const roofType = document.getElementById('atap-type').value; // spandek-pasir-30 atau genteng-metal-pasir

        if (areaAlas <= 0) return;

        // Est. Luas Atap Miring (Alas + Overstek / cos(slope))
        // Anggap panjang & lebar alas = akar dari areaAlas
        const side = Math.sqrt(areaAlas);
        const effSide = side + (2 * overstek);
        const areaAtap = (effSide * effSide) / Math.cos(slope * Math.PI / 180);

        const c75 = PRODUCTS.find(p => p.id === 'truss-taso-75');
        const reng = PRODUCTS.find(p => p.id === 'reng-taso-45');
        const tile = PRODUCTS.find(p => p.id === roofType);

        // Kebutuhan rangka
        const c75Needed = Math.ceil(areaAtap * 1.3); // 1.3 batang C75 per m2 atap
        const rengNeeded = Math.ceil(areaAtap * 1.5); // 1.5 batang Reng per m2 atap
        
        let tilesNeeded = 0;
        if (roofType.includes('spandek')) {
            tilesNeeded = Math.ceil(areaAtap); // Spandek lebar efektif 1m
        } else {
            tilesNeeded = Math.ceil(areaAtap / 0.64); // Genteng metal ukuran 80x80cm (0.64 m2)
        }

        const totalCost = (c75Needed * c75.price) + (rengNeeded * reng.price) + (tilesNeeded * tile.price);

        document.getElementById('atap-res-area').textContent = `${areaAtap.toFixed(2)} m²`;
        document.getElementById('atap-res-c75').textContent = `${c75Needed} Batang`;
        document.getElementById('atap-res-reng').textContent = `${rengNeeded} Batang`;
        document.getElementById('atap-res-tiles').textContent = `${tilesNeeded} Lembar`;
        document.getElementById('atap-res-cost').textContent = formatRupiah(totalCost);

        const addBtn = document.getElementById('atap-add-cart');
        if (addBtn) {
            addBtn.onclick = () => {
                window.addToCart(c75.id, c75Needed, false, `Simulasi Rangka Atap: C75 SNI`);
                window.addToCart(reng.id, rengNeeded, false, `Simulasi Rangka Atap: Reng SNI`);
                window.addToCart(tile.id, tilesNeeded, false, `Simulasi Atap: Penutup ${tile.name}`);
            };
            addBtn.disabled = false;
            addBtn.classList.remove('opacity-50');
        }
    };

    // D. KALKULATOR PARTISI
    window.calculatePartisi = () => {
        const length = parseFloat(document.getElementById('partisi-length').value) || 0;
        const height = parseFloat(document.getElementById('partisi-height').value) || 0;
        const sides = parseInt(document.getElementById('partisi-sides').value) || 2; // 1 atau 2 sisi

        if (length <= 0 || height <= 0) return;

        const area = length * height;
        const gyp = PRODUCTS.find(p => p.id === 'gypsum-jayaboard');
        const stud = PRODUCTS.find(p => p.id === 'metal-stud-76');
        const track = PRODUCTS.find(p => p.id === 'metal-track-76');

        // Kebutuhan papan gypsum (1 lembar = 2.88m2)
        const boardNeeded = Math.ceil((area * sides) / 2.88);
        // Stud vertikal diletakkan tiap 60cm (3 meter per batang)
        const studsNeeded = Math.ceil((length / 0.6) * (height / 3));
        // Track horizontal dipasang di alas dan langit-langit (3 meter per batang)
        const tracksNeeded = Math.ceil((length * 2) / 3);

        const totalCost = (boardNeeded * gyp.price) + (studsNeeded * stud.price) + (tracksNeeded * track.price);

        document.getElementById('partisi-res-area').textContent = `${area.toFixed(2)} m²`;
        document.getElementById('partisi-res-boards').textContent = `${boardNeeded} Lembar`;
        document.getElementById('partisi-res-studs').textContent = `${studsNeeded} Batang`;
        document.getElementById('partisi-res-tracks').textContent = `${tracksNeeded} Batang`;
        document.getElementById('partisi-res-cost').textContent = formatRupiah(totalCost);

        const addBtn = document.getElementById('partisi-add-cart');
        if (addBtn) {
            addBtn.onclick = () => {
                window.addToCart(gyp.id, boardNeeded, false, `Simulasi Partisi: Gypsum ${sides} Sisi`);
                window.addToCart(stud.id, studsNeeded, false, `Simulasi Partisi: Metal Stud 76mm`);
                window.addToCart(track.id, tracksNeeded, false, `Simulasi Partisi: Metal U-Track 76mm`);
            };
            addBtn.disabled = false;
            addBtn.classList.remove('opacity-50');
        }
    };

    // E. GENERAL HOMEPAGE CALCULATOR (BAHAN + OPSI JASA PASANG)
    const calcCategorySelect = document.getElementById('calc-category');
    const calcPlafonInputs = document.getElementById('calc-plafon-inputs');
    const calcAtapInputs = document.getElementById('calc-atap-inputs');
    const calcLength = document.getElementById('gen-length');
    const calcWidth = document.getElementById('gen-width');
    const calcAtapArea = document.getElementById('gen-atap-area');
    const calcOptionService = document.getElementById('calc-option-service');
    const calcGeneralBtn = document.getElementById('calc-general-calculate');

    if (calcCategorySelect) {
        calcCategorySelect.addEventListener('change', (e) => {
            const cat = e.target.value;
            if (cat === 'atap') {
                calcPlafonInputs.style.display = 'none';
                calcAtapInputs.style.display = 'block';
            } else {
                calcPlafonInputs.style.display = 'block';
                calcAtapInputs.style.display = 'none';
            }
        });
    }

    if (calcGeneralBtn) {
        calcGeneralBtn.addEventListener('click', () => {
            const cat = calcCategorySelect.value;
            const includeService = calcOptionService.checked;

            let area = 0;
            let materialCost = 0;
            let laborCost = 0;
            let summaryText = "";

            if (cat === 'plafon') {
                const len = parseFloat(calcLength.value) || 0;
                const wid = parseFloat(calcWidth.value) || 0;
                if (len <= 0 || wid <= 0) return;

                area = len * wid;
                const boards = Math.ceil(area / 2.88);
                const h4 = Math.ceil((len * (wid/0.6 + 1) + wid * (len/0.6 + 1)) / 4);
                const h2 = Math.ceil(h4 * 0.5);

                materialCost = (boards * 85000) + (h4 * 28000) + (h2 * 22000);
                if (includeService) laborCost = area * 150000; // Biaya borongan jasa pasang gypsum/m2
                summaryText = `Plafon Gypsum: ${boards} Lbr Gypsum, ${h4} Hollow 4x4, ${h2} Hollow 2x4.`;

            } else if (cat === 'pvc') {
                const len = parseFloat(calcLength.value) || 0;
                const wid = parseFloat(calcWidth.value) || 0;
                if (len <= 0 || wid <= 0) return;

                area = len * wid;
                const panels = Math.ceil(area / 0.8);
                const h4 = Math.ceil((len * (wid/0.6 + 1) + wid * (len/0.6 + 1)) / 4);
                const h2 = Math.ceil(h4 * 0.5);

                materialCost = (panels * 45000) + (h4 * 28000) + (h2 * 22000);
                if (includeService) laborCost = area * 160000; // Jasa pasang PVC/m2
                summaryText = `Plafon PVC Golden: ${panels} Lembar PVC, ${h4} Hollow 4x4, ${h2} Hollow 2x4.`;

            } else if (cat === 'atap') {
                const areaAlas = parseFloat(calcAtapArea.value) || 0;
                if (areaAlas <= 0) return;

                const side = Math.sqrt(areaAlas);
                const effSide = side + 2; // Overstek est 1m
                area = (effSide * effSide) / Math.cos(30 * Math.PI / 180); // Kemiringan 30 drajat

                const c75 = Math.ceil(area * 1.3);
                const rengBatang = Math.ceil(area * 1.5);
                const genteng = Math.ceil(area / 0.64);

                materialCost = (c75 * 95000) + (rengBatang * 48000) + (genteng * 35000);
                if (includeService) laborCost = area * 220000; // Jasa pasang rangka atap + genteng metal/m2
                summaryText = `Rangka Atap Baja Ringan: ${c75} Btg C75, ${rengBatang} Btg Reng, ${genteng} Lbr Genteng Metal.`;

            } else if (cat === 'partisi') {
                const len = parseFloat(calcLength.value) || 0;
                const wid = parseFloat(calcWidth.value) || 0; // Disini lebar berfungsi sebagai tinggi partisi
                if (len <= 0 || wid <= 0) return;

                area = len * wid;
                const boards = Math.ceil((area * 2) / 2.88); // 2 sisi
                const studs = Math.ceil((len / 0.6) * (wid / 3));
                const tracks = Math.ceil((len * 2) / 3);

                materialCost = (boards * 85000) + (studs * 45000) + (tracks * 42000);
                if (includeService) laborCost = area * 180000; // Jasa pasang partisi/m2
                summaryText = `Partisi Gypsum 2 Sisi: ${boards} Lbr Gypsum, ${studs} Stud 76mm, ${tracks} Track 76mm.`;
            }

            const totalSum = materialCost + laborCost;

            // Output UI
            document.getElementById('gen-res-area').textContent = `${area.toFixed(1)} m²`;
            document.getElementById('gen-res-material').textContent = formatRupiah(materialCost);
            document.getElementById('gen-res-labor').textContent = formatRupiah(laborCost);
            document.getElementById('gen-res-total').textContent = formatRupiah(totalSum);

            // Add general calc result to cart
            const addGeneralCart = document.getElementById('gen-add-cart');
            if (addGeneralCart) {
                addGeneralCart.onclick = () => {
                    // Masukkan ke keranjang dalam bentuk paket simulasi custom
                    cart.push({
                        cartItemId: `gen-calc-${cat}-${includeService ? 'jasa' : 'bahan'}`,
                        id: `simulasi-${cat}`,
                        name: `Paket Rangka & Material ${cat.toUpperCase()} ${includeService ? '+ Jasa Pasang' : ''}`,
                        pricePerUnit: totalSum,
                        unit: 'paket',
                        description: `${summaryText} Luas Pengerjaan: ${area.toFixed(1)}m²`,
                        quantity: 1
                    });
                    saveCart();
                    openCart();
                };
                addGeneralCart.disabled = false;
                addGeneralCart.classList.remove('opacity-50');
            }
        });
    }

    // ─── 7. LIVE FAQ ACCORDION LOGIC ─────────────────────────────────────────
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        if (header) {
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(i => i.classList.remove('active'));
                if (!isActive) item.classList.add('active');
            });
        }
    });

    // ─── 8. DARK & LIGHT THEME TOGGLING ──────────────────────────────────────
    const themeToggleBtn = document.getElementById('theme-toggle');
    const initTheme = () => {
        const currentTheme = localStorage.getItem('jagad_theme') || 'light';
        if (currentTheme === 'dark') {
            document.documentElement.classList.add('dark');
            if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="ph ph-sun text-xl text-yellow-500"></i>';
        } else {
            document.documentElement.classList.remove('dark');
            if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="ph ph-moon text-xl text-neutral-600"></i>';
        }
    };

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('jagad_theme', 'light');
                themeToggleBtn.innerHTML = '<i class="ph ph-moon text-xl text-neutral-600"></i>';
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('jagad_theme', 'dark');
                themeToggleBtn.innerHTML = '<i class="ph ph-sun text-xl text-yellow-500"></i>';
            }
        });
    }

    // ─── 9. RUN INITIAL RENDERS ──────────────────────────────────────────────
    initTheme();
    updateCartBadge();
    renderCatalog();
    renderPriceTable();
});
