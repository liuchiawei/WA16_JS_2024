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
            position: { x: data.x, y: data.y }
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

        X += (targetX - X);
        Y += (targetY - Y);

        const translateX = X % W;
        const translateY = Y % H;
        const margin = 100;

        stage.css("transform", `translate(${translateX}px, ${translateY}px)`);
        clones.forEach(clone => {
            clone.css("transform", `translate(${translateX - margin}px, ${translateY + margin}px)`);
        });

        window.requestAnimationFrame(update);
    }

    function createWorkElement(data) {
        const work = $("<div>").addClass("work");
        const image = $("<img>").addClass("image-item").attr("src", data.src);
        image.addClass(data.frameClass)
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
