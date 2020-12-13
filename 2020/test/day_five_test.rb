# frozen_string_literal: true

require_relative '../lib/env'
require_relative '../day_five/day_five'

class DayFiveTest < Minitest::Test
  def test_part_1_practice
    assert_equal 820, DayFive.new(DayFiveInput.practice).solve_part_one
  end

  def test_part_1_real
    assert_equal 994, DayFive.new(DayFiveInput.real).solve_part_one
  end

  def test_part_2_practice
    out = Integer
    array = [8, 2, 3, 5, 6, 7].sort!
    array.each_index do |index|
      next unless array[index - 1] == array[index] - 2

      out = array[index] - 1
    end
    assert_equal 4, out
  end

  def test_part_2_real
    assert_equal 741, DayFive.new(DayFiveInput.real).solve_part_two
  end
end

class BinarySpacePartitionTest < MiniTest::Test
  def test_encoded_id_split
    bsp = BinarySpacePartition.new
    id = 'FBFBBFFRLR'
    assert_equal(
      { row_id: 'FBFBBFF', column_id: 'RLR' },
      bsp.encoded_seat_id(id).split_id
    )
  end

  def test_seat_id_calc
    bsp = BinarySpacePartition.new
    seat_info = {
      row: 44,
      column: 5
    }
    assert_equal 357, bsp.calculate_seat_id(seat_info)
  end

  # def test_decode_row_id
  #   bsp = BinarySpacePartition.new

  #   assert_equal 44, bsp.decode_row
  # end

  def test_binary_search
    bsp = BinarySpacePartition.new

    assert_equal 44, bsp.binary_search('FBFBBFF', 0, 127)
  end

  def test_binary_search_two
    bsp = BinarySpacePartition.new

    assert_equal 5, bsp.binary_search('RLR', 0, 7)
  end
end
