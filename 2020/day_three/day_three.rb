# frozen_string_literal: true

require_relative '../lib/env'
require_relative './map_builder'
require_relative './navigator'

class DayThree
  def initialize(input_data)
    @test_input = input_data
  end

  def solve_part_one
    map = MapBuilder.new(@test_input.dup)
    navigator = Navigator.new(map.current_map)
    open_squares = 0
    trees = 0

    loop do
      position = navigator.check_position

      case position
      when 'x axis too short'
        map.add_left(1)
        navigator.update_map(map.current_map)
        navigator.check_position
        next
      when 'y axis too short'
        break
      else
        case position
        when '.'
          open_squares += 1
        when '#'
          trees += 1
        else
          throw 'broken'
        end
      end

      navigator.move_position(3, 1)
    end

    trees
  end
end

module DayThreeInput
  def self.practice
    %w[
      ..##.......
      #...#...#..
      .#....#..#.
      ..#.#...#.#
      .#...##..#.
      ..#.##.....
      .#.#.#....#
      .#........#
      #.##...#...
      #...##....#
      .#..#...#.#
    ]
  end

  def self.real
    %w[
      ......#...........#...#........
      .#.....#...##.......#.....##...
      ......#.#....#.................
      ..............#.#.......#......
      .....#.#...##...#.#..#..#..#..#
      .......##...#..#...........#...
      .......#.##.#...#.#.........#..
      ..#...##............##......#.#
      .......#.......##......##.##.#.
      ...#...#........#....#........#
      #............###.#......#.....#
      ..#........#....#..#..........#
      ..#..##....#......#..#......#..
      ........#......#......#..#..#..
      ..#...#....#..##.......#.#.....
      .....#.#......#..#....#.##.#..#
      ......###.....#..#..........#..
      .#................#.#..........
      .........#..#...#......##......
      ##...#....#...#.#...#.##..#....
      ...##...#....#.........###.....
      .#.#....#.........##...........
      ....#.#..#..#...........#......
      ..#..#.#....#....#...#.........
      ..........##.....#.##..........
      ..#.#....#..##......#.#.....##.
      ..#...#.##......#..........#...
      ......#....#..#.....#.....#...#
      #.#...##.#.##.........#..#.....
      ...#.#.#.........#.....#.#.#...
      ..#.........#...............#..
      #..##.....#.........#....#.....
      ...#....##..##...........##..#.
      ......##.................#.#...
      ##.......#....#.#.#.....#......
      ....#.#...#.................##.
      #...#.........##.....#.........
      #....#.###..#.....##.#....#....
      #..#....#...#....#.#.#.........
      .......#...........#....#.....#
      #...#.............#........#...
      .......#.....#...#..#.........#
      .##.....##.....##.......#......
      ....##...##.......#..#.#.....#.
      .##.........#......#........##.
      .......#...#...###.#..#........
      ..#..###......##..##...........
      .#..#......##..#.#.........#...
      ...#.......#........#...#.#....
      ...#....#..#....#.....##.......
      ............#......#..........#
      .#.......#......#.#....#..#.#..
      ##.........#.#.#..........#....
      ....##.....#...................
      .......#..#........#...........
      ....##.#..#......###.......#...
      ....#....#...#.#......#...#...#
      .......#.....##..#....#...#....
      #...#........#.........#..##...
      ...........##.........#.#...#..
      ....................#....#.##..
      .#..#..#.........#....#..#..##.
      ......................#........
      ..###....#.......#.....###.##..
      ......#......#.......#.....#..#
      .....#...#.##...#......#....#..
      .....#.....##.............#....
      ....#......##..#....#.......#..
      .##....#..##......###....#..#..
      ...###.#.............##...#.#..
      .....#.....#.....#...#..#.#....
      ..#.#.....###......#.......#...
      ..........#.##......#.........#
      ..##..#.......................#
      ........#......#............#..
      #..#..#..#.#......#..#....#....
      ...##......#.............#....#
      ...........#..#..##.......#....
      .....#.........#.#..#..........
      ##...#.......#.#....#..#..#....
      #.#.#...........#.##.#.#..###..
      #..#...........#.........##....
      ............#.#..............#.
      .#....#....##.#...........#..#.
      ....#...#..#...#....#....#.....
      ....#....#...#..#......#.......
      .#.#.........#.......#.##......
      .#..##...#........#...........#
      ##...#..#...#...#.....#...#....
      ....###.#..#.......##.#..#...#.
      ...##.......####...##.#........
      #....#....#.#............#..#..
      #.#.#...#...................##.
      ##......#...........#..........
      #..#..#....#.#...#......#......
      .##...#.....#...#........#.....
      ..#............#..............#
      ###........#..#....#...#......#
      ###..##......#.##...........#..
      ........#......#..#.....#......
      ...#..........#..#...........#.
      ....#..#..#....#........#....#.
      .#.................#####..##..#
      .....#...##..#..........#.##...
      ..#..............#...####......
      .....#.##..................#.#.
      ...#.#..#..#........#..........
      ...........#....#.#..#.........
      .....##.......#......#..#.#.#..
      ...#.............##...#........
      ...............#.......##.##.##
      .....#........#........#.#..#..
      ...#..#.........#...##...###...
      ...#.#.............###.#.....#.
      .#..........#......###.#.#.....
      ....##..##.............###.....
      ..#..#.#...##...#.......##.....
      ..........###........#.....#.#.
      #.#....#..#..#......#...#...#..
      .........#......##.......#.#..#
      ...#.....#.........##..#..#....
      .....##.#..##.##..##...........
      ...#.#.##....#..#..#......#..#.
      #....#....#.............#...##.
      #......#..#.####.#.##.#....##..
      ##.#.#....##..................#
      .....##......#.......##.......#
      ..#......#.#..#...##......##...
      ..#....##....#.........#..##...
      .###.....#....##...........#...
      .........#......#.#........#...
      ...#...#..#.#....######.#..#...
      ###......#.#.#.........##.#....
      .....#...#.........#...#.......
      ....#.............#.#.........#
      ..##...#...#.......#......#....
      .....#...#.#...#...#..#........
      .#......#......................
      ...###..#..#....#...##.#.......
      .#.#.....##...#...#.....#...##.
      .....###..###....##............
      .....##....#..#.....#.##.......
      #........#.........#...#..#....
      ...#.#.........#..#.......#.#..
      ....#.#....##.....#..........#.
      .#..#....#..#.#..#..#.........#
      #...#....#..............#......
      .........#.....#.##...##...###.
      .....#....##............#..#...
      .....#.#...........#..#....#...
      .#..........#...#......#.....#.
      .#...........#.....#..#........
      ..............#......##...#..#.
      ...#.........#..#....#..##...##
      ..##...#..................#....
      #.....#.................#......
      ...#......#..#..........#.#....
      ......#..#.....#.....##...#..#.
      ......#........#..........#....
      ...##.##....#..##.#..........#.
      ..........#..#.#.##............
      ..##........................#..
      .....#.#.#......#....#....##...
      #....#.........#........#......
      .##.......#...#...#........##..
      ....##......#....#.#..........#
      ..#.......#..............#.....
      .....#......#.#...#..#.#.#....#
      .....#..#........#.##.##.......
      ##........#..........#.........
      .....#..##....#.#......###..##.
      #.#...##.........#.#.....#..#..
      #....#.#...#........#.....#..#.
      ........................#......
      ....###......#............#...#
      ...#..##......#..##.........#..
      .............#...#......#..#..#
      ....#......#....#...........#..
      ..#.#.####.#.....##........#..#
      #..#...#..#..#.......#.#..#....
      ..#..#..#....#.#.........##..#.
      .......#......#.#............#.
      ...#.............#.#.....#.....
      ...#.#.........##...#.#.......#
      ........#...#...........##...#.
      ..........#....#......#....##..
      ..........#...........#........
      ...#..#...#..........#......#..
      ......#......#....#.....#..#.#.
      ........##.................#..#
      .#........#.#...........#......
      #...#........#.#.#.....#.#.#...
      .........#........#..#..#....#.
      ##........#..........#....#..#.
      .#.##...........#..#.#..##....#
      .......#.#....#..#......#......
      ..#.....#........##..#......###
      ..#...#..................#....#
      ......#...#..#.##.......#......
      ........#...#.#................
      .........#............#........
      ..#.....##....#.#..##..........
      #.....#..........#....#........
      ....#.#...#...##....#.....##...
      ..#.#.......#.............#...#
      ...##..............#......#....
      #......#...#................##.
      .#.#...#.#..#..................
      ...##.......#...........#.#.#..
      #......#.#.#........#.##...####
      .......#..#.#.........#.#.##..#
      ..............#....#.........#.
      ...........#.#..#....##......#.
      #.............#...##..#.......#
      .........#............#...#.##.
      .......#.........#.#.....#..#..
      ........................#.#.##.
      #......#.#......#.........#....
      ...#.......#.......#.....#.....
      #..#....#................#...#.
      ........#.#..##......#.........
      #..#...##....##....##.........#
      .......#...#...###.............
      #.#..#........#.#.#............
      #.....#........##.........#.#..
      .#..........#....#.#....###....
      .#.....#...#.#........#..#.##..
      ...#.##......#..#.............#
      ..##..#.#...................#..
      .....#....#...#.#...#...#......
      .....#..#.#....#.#.............
      #.#....#.#.##..###..........#..
      ........#.#.............#..#...
      .........#.......#.............
      .##.#............##...#........
      ......#................#.......
      ...............#..#...........#
      ...#.......#...#.##.....#....#.
      ##..##..#..........#...........
      .##.#.......#...#..#...#...#...
      ....#..#...........#....#.##...
      .#........#........#....#......
      .......#...#.##.#..#.#..#......
      .#..#......#....#...##....#.#..
      ......#...##.#.....##.###.....#
      .#....#..#......#...#.#.....#..
      #............#....##...##.##...
      #...#.#....#...#.......##...##.
      #...........#.##..#....#.....#.
      ...#..#...#.........#.......#..
      .#....#.....#............#.#..#
      .#.....#.#...#.#....##......###
      ..#..#.#.#...#..#.............#
      ...#...#..#....#........#...##.
      .......#.....#...##...........#
      #.##.................#...##...#
      ..............##........#.....#
      ............#...#..#.......#.#.
      #.#.....#.........#...#......#.
      #.###..#......#..#..#...#.....#
      .....#.......#.................
      ........#..#......#.#...#......
      #.......#..#........#...#..#...
      ..#...#.......##.............#.
      #.......#.......##...#.........
      .........#....#.#..##.....#...#
      ..#.....#.#.......#....#.......
      ...#.......#.....#..##.#..#....
      ....#.......#.#.#..............
      .#..#......#........#.#..##..##
      ....#...#.##.#...#....##...#...
      #..##..#.....#.......#.........
      ....#..#..#.#............#.....
      #.......##...##..##............
      ...............................
      ....#.......#.##...#.....#.#...
      ...#........#....#.#..#..#.....
      ##.......#.....##.#.#....#....#
      #.............#...........#.##.
      #...........#.#..........#.....
      #..#....#....#.#.........#.#...
      ......#.#.#..#.#.#.............
      ...#.....#........##....#......
      ..#...#...#.#.......#......#...
      .##........#...#..#..........#.
      ..#...........#..##.....##.....
      ............#..#.#...#.....#...
      ..........#....##.......#......
      ....#....#.................#..#
      ....#...............#.........#
      ..#.#...#......#..........##...
      .....#...........#.........#..#
      .......#.....##.....#.#........
      .#.#..........#....#...........
      .#..##....#........#....#......
      ....#.#..#.......#..#.........#
      ..#....#.....#......#..#.......
      ......#........#.......#...#.#.
      .......#.......#....#.....##...
      ....##........#..#...#.#..#...#
      .#......#...........##....#....
      ##....##......#.......#.......#
      .##....#.##......#.......##..#.
      ...#..#.#.#.......#..#.###.....
      ..........##....#..#.##........
      ...#........###.#..#........#..
      .....#....#..##....#.....#....#
      #..........#..........#.#....#.
      ..#....#.....#..............#..
      #..................#......#.##.
      .#...#.#.....#.........##......
      ...#...........#.....#......#..
      ......#.....#.#..##......##....
      ...#....###..#.....#..#..##..##
      ......#.......##..#..#.........
      #..#.#....#.#..#..........##.#.
      ..#..#..##..#.#.#.#.....#......
      ..#.#...#..#.....###.#.........
      ##.#.#......#........#.####....
      .............#..#..#....#......
      ...##..........#.......#.#....#
      ..#.....................#......
      ..#..#...##...#.##........#....
    ]
  end
end
