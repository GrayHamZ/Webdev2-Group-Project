-- CreateTable
CREATE TABLE `Villa` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `bedrooms` INT NOT NULL,
    `bathrooms` INT NOT NULL,
    `guests` INT NOT NULL,
    `amenities` TEXT NOT NULL
);

-- CreateTable
CREATE TABLE `Post` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(191) NOT NULL,
    `content` TEXT NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `date` DATETIME NOT NULL,
    `priority` ENUM('LOW', 'MEDIUM', 'HIGH') NOT NULL
);

-- CreateTable
CREATE TABLE `VillaBooking` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `villaId` INT NOT NULL,
    `guestName` VARCHAR(191) NOT NULL,
    `guestEmail` VARCHAR(191) NOT NULL,
    `guestPhone` VARCHAR(191) NOT NULL,
    `checkIn` DATETIME NOT NULL,
    `checkOut` DATETIME NOT NULL,
    `guests` INT NOT NULL,
    `totalPrice` INT NOT NULL,
    `status` ENUM('PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED') NOT NULL,
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `notes` TEXT,
    CONSTRAINT `VillaBooking_villaId_fkey` FOREIGN KEY (`villaId`) REFERENCES `Villa` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE `BookingDate` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `villaId` INT NOT NULL,
    `date` DATETIME NOT NULL,
    `available` BOOLEAN NOT NULL DEFAULT TRUE,
    `price` INT NOT NULL,
    `isBlocked` BOOLEAN NOT NULL DEFAULT FALSE,
    CONSTRAINT `BookingDate_villaId_fkey` FOREIGN KEY (`villaId`) REFERENCES `Villa` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);
