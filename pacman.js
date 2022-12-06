class Pacman {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = DIRECTION_RIGHT;
        this.nextDirection = this.direction;
        this.currentFrame = 1;
        this.frameCount = 7; 

        setInterval(() => {
            this.changeAnimation()
        }, 100); 

        
    }

    moveProcess() {
        this.changeDirectionIfPossible();
        this.moveForWards();
        if (this.checkCollision()) {
            this.moveBackWards();
        }
    }

    eat() {

    }

    moveBackWards() {
        switch(this.direction) {
            case DIRECTION_RIGHT:
                this.x -= this.speed
                break;
            case DIRECTION_UP:
                this.y += this.speed
                break;
            case DIRECTION_LEFT:
                this.x += this.speed
                break;
            case DIRECTION_DOWN:
                this.y -= this.speed
                break;  
        }
    }

    moveForWards() {
        switch(this.direction) {
            case DIRECTION_RIGHT:
                this.x += this.speed
                break;
            case DIRECTION_UP:
                this.y += this.speed
                break;
            case DIRECTION_LEFT:
                this.x += this.speed
                break;
            case DIRECTION_DOWN:
                this.y += this.speed
                break;  
        }
    }

    checkCollision() { 
        if(
            map[this.getMapY()][this.getMapX()] == 1 ||
            map[this.getMapYRightSide()][this.getMapX()] == 1 ||
            map[this.getMapY()][this.getMapXRightSide()] == 1 ||
            map[this.getMapYRightSide()][this.getMapXRightSide()] == 1
        ) {
            return true;
        }
        return false;
    }    
    checkGhostCollision() {
    
    }

    changeDirectionIfPossible() {

    }

    changeAnimation(){
        this.currentFrame = this.currentFrame === this.frameCount ? 1 : this.currentFrame + 1
    }

    draw() {
        canvasContext.save();
        canvasContext.translate(
            this.x + oneBlockSize / 2,
            this.y + oneBlockSize / 2
        );

        canvasContext.rotate( (this.direction * 90 * Math.PI) / 180 );

        canvasContext.translate(
            -this.x - oneBlockSize / 2,
            -this.y + oneBlockSize / 2
        )

        canvasContext.drawImage(
            pacmanFrames,
            (this.currentFrame - 1) * oneBlockSize,
            0,
            oneBlockSize,
            oneBlockSize,
            this.x,
            this.y,
            this.width,
            this.height
        )
        
        canvasContext.restore()
    }

    getMapX() {
        let mapX = parseInt(this.x / oneBlockSize);
        return mapX;
    }

    getMapY() {
        let mapY = parseInt(this.y / oneBlockSize);

        return mapY;
    }

    getMapXRightSide() {
        let mapX = parseInt((this.x * 0.99 + oneBlockSize) / oneBlockSize);
        return mapX;
    }

    getMapYRightSide() {
        let mapY = parseInt((this.y * 0.99 + oneBlockSize) / oneBlockSize);
        return mapY;
    }

    changeAnimation() {
        this.currentFrame =
            this.currentFrame == this.frameCount ? 1 : this.currentFrame + 1;
    }
}