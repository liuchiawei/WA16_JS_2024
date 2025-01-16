$(function () {
    const stage = $('#stage');
    const clones = []; // 複製されたステージ
    const items = [];

    // レイアウト関連定数
    const wheelSpeed = 0.1;
    const vRate = 0.95;
    const maxSpeed = 10; // 最大速度
    let pointerDown = false;

    let W = 0, H = 0;
    let X = 0, Y = 0;
    let targetX = 0, targetY = 0;
    let vx = 0, vy = 0;

    // アイテムを作成して配置
    worksData.forEach(data => {
        const workEl = createWorkElement(data);
        stage.append(workEl);

        items.push({
            work: workEl[0],
            position: { x: data.x, y: data.y },
            isVisible: true // 初期状態では可視
        });
    });

    function onWheel(event) {
        vx += event.deltaX * wheelSpeed;
        vy += event.deltaY * wheelSpeed;
        vx = Math.max(-maxSpeed, Math.min(maxSpeed, vx));
        vy = Math.max(-maxSpeed, Math.min(maxSpeed, vy));
        event.preventDefault();
    }

    function onPointerDown(event) {
        pointerDown = true;
        lastX = event.pageX;
        lastY = event.pageY;
    }

    function onPointerMove(event) {
        if (pointerDown) {
            const deltaX = event.pageX - lastX;
            const deltaY = event.pageY - lastY;
            vx = -deltaX * 0.1;
            vy = -deltaY * 0.1;

            vx = Math.max(-maxSpeed, Math.min(maxSpeed, vx));
            vy = Math.max(-maxSpeed, Math.min(maxSpeed, vy));

            lastX = event.pageX;
            lastY = event.pageY;

            event.preventDefault();
        }
    }

    function onPointerUp() {
        pointerDown = false;
    }

    function createClones() {
        // 上下左右に複製 (pxで計算)
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                if (dx === 0 && dy === 0) continue; // オリジナルはスキップ
                const clone = stage.clone().addClass('clone').css({
                    transform: `translate(${dx * W}px, ${dy * H}px)`
                });
                $('body').append(clone);
                clones.push(clone);
            }
        }
    }

    function reset() {
        W = window.innerWidth;
        H = window.innerHeight;

        items.forEach(item => {
            const x = item.position.x;
            const y = item.position.y;

            $(item.work).css({
                left: `${x}px`,
                top: `${y}px`,
                position: 'absolute'
            });
        });
    }

    function update() {
        vx *= vRate;
        vy *= vRate;

        targetX -= vx;
        targetY -= vy;

        X += (targetX - X) * 0.1;
        Y += (targetY - Y) * 0.1;

        // スクロール範囲をチェックし、ループ処理
        if (X <= -W / 2) {
            X += W;
            targetX += W;
        } else if (X >= W / 2) {
            X -= W;
            targetX -= W;
        }

        if (Y <= -H / 2) {
            Y += H;
            targetY += H;
        } else if (Y >= H / 2) {
            Y -= H;
            targetY -= H;
        }

        const translateX = X % W;
        const translateY = Y % H;

        stage.css("transform", `translate(${translateX}px, ${translateY}px)`);

        // 画像が表示領域に収まっているかを判定
        items.forEach(item => {
            const itemX = translateX + item.position.x;
            const itemY = translateY + item.position.y;

            const isVisible =
                itemX + $(item.work).width() > 0 &&
                itemX < W &&
                itemY + $(item.work).height() > 0 &&
                itemY < H;

            if (isVisible && !item.isVisible) {
                // 画像が表示領域内に入る場合
                $(item.work).stop().fadeIn(800);
                item.isVisible = true;
            } else if (!isVisible && item.isVisible) {
                // 画像が表示領域外に出る場合
                $(item.work).stop().fadeOut(800);
                item.isVisible = false;
            }
        });

        window.requestAnimationFrame(update);
    }

    function createWorkElement(data) {
        const work = $("<div>").addClass("work");
        const image = $("<img>").addClass("image-item").attr("src", data.src);
        image.addClass(data.frameClass);
        work.append(image);
        return work;
    }

    document.addEventListener('wheel', onWheel, { passive: false });
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('pointermove', onPointerMove, { passive: false });
    document.addEventListener('pointerup', onPointerUp);
    window.addEventListener('resize', reset);

    createClones();
    reset();
    update();
});
